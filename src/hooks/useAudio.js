import { useCallback, useRef } from 'react';

// ElevenLabs-only audio engine.
// If VITE_ELEVENLABS_API_KEY is not set and the static mp3 is missing,
// narration is silently skipped — no Web Speech API fallback.

const VOICE_ID = 'Xb7hH8MSUJpSbSDYk0k2'; // Alice – Clear Educator
const MODEL    = 'eleven_multilingual_v2';

const cache = new Map();
const recentPlayback = new Map();
const PLAYBACK_COOLDOWN_MS = 1500;

async function getAudioUrl(text, apiKey) {
  // 1. Check pre-generated static file via audioMap
  try {
    const { audioMap } = await import('../utils/audioMap.js');
    if (audioMap[text]) return audioMap[text];
  } catch { /* audioMap not generated yet — skip */ }

  // 2. Dynamic ElevenLabs generation
  if (!apiKey) return null;
  if (cache.has(text)) return cache.get(text);

  try {
    const res = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
      {
        method: 'POST',
        headers: {
          'xi-api-key': apiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text,
          model_id: MODEL,
          voice_settings: { stability: 0.5, similarity_boost: 0.75, style: 0.3 },
        }),
      }
    );
    if (!res.ok) return null;
    const blob = await res.blob();
    const url  = URL.createObjectURL(blob);
    cache.set(text, url);
    return url;
  } catch {
    return null;
  }
}

export function useAudio(enabled) {
  const currentAudio = useRef(null);
  const apiKey = import.meta.env?.VITE_ELEVENLABS_API_KEY ?? null;

  const play = useCallback(async (text) => {
    if (!enabled) return;
    const now = Date.now();
    const lastPlayedAt = recentPlayback.get(text) ?? 0;
    if (now - lastPlayedAt < PLAYBACK_COOLDOWN_MS) return null;
    recentPlayback.set(text, now);

    const url = await getAudioUrl(text, apiKey);
    if (!url) return null;
    if (currentAudio.current) {
      currentAudio.current.pause();
      currentAudio.current.currentTime = 0;
    }
    const audio = new Audio(url);
    currentAudio.current = audio;
    audio.play().catch(() => {});
    return audio;
  }, [enabled, apiKey]);

  const stop = useCallback(() => {
    if (currentAudio.current) {
      currentAudio.current.pause();
      currentAudio.current = null;
    }
  }, []);

  return { play, stop };
}
