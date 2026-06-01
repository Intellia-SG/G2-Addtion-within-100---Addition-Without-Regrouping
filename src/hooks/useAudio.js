import { useCallback } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// Global singleton audio engine.
//
// ALL hook instances share the same _activeAudio and _activeAbort so that
// calling stop() or play() from *any* component immediately silences whatever
// is currently playing — even if it was started by a different component or
// phase.  This prevents the "multiple voices at once" bug that occurs when
// phases overlap during transitions.
//
// Audio sources: pre-generated static MP3s via audioMap → ElevenLabs dynamic
// generation (requires VITE_ELEVENLABS_API_KEY).  No Web Speech API fallback.
// ─────────────────────────────────────────────────────────────────────────────

const VOICE_ID = 'Xb7hH8MSUJpSbSDYk0k2'; // Alice – Clear Educator
const MODEL    = 'eleven_multilingual_v2';

let _activeAudio = null;   // The single playing HTMLAudioElement
let _activeAbort = null;   // AbortController for any in-flight queue
const _urlCache  = new Map();

/** Stop everything immediately and cancel any queued narration. */
function _stopAll() {
  if (_activeAbort) {
    _activeAbort.abort();
    _activeAbort = null;
  }
  if (_activeAudio) {
    _activeAudio.pause();
    _activeAudio.currentTime = 0;
    _activeAudio = null;
  }
}

async function _getUrl(text, apiKey) {
  // 1. Static pre-generated MP3 (audioMap)
  try {
    const { audioMap } = await import('../utils/audioMap.js');
    if (audioMap[text]) return audioMap[text];
  } catch { /* audioMap not available – skip */ }

  // 2. Dynamic ElevenLabs generation
  if (!apiKey) return null;
  if (_urlCache.has(text)) return _urlCache.get(text);

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
    _urlCache.set(text, url);
    return url;
  } catch {
    return null;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
export function useAudio(enabled) {
  const apiKey = import.meta.env?.VITE_ELEVENLABS_API_KEY ?? null;

  /**
   * Play a single text clip.
   * Stops whatever is currently playing globally, then starts this clip.
   * Returns the Audio element so callers can await its 'ended' event if needed.
   */
  const play = useCallback(async (text) => {
    if (!enabled || !text) return null;

    const url = await _getUrl(text, apiKey);
    if (!url) return null;

    _stopAll();

    const audio = new Audio(url);
    _activeAudio = audio;
    audio.play().catch(() => {});
    return audio;
  }, [enabled, apiKey]);

  /**
   * Play an ordered array of narration segments sequentially.
   * Each segment is { text } (or a plain string).
   * The entire queue is cancelled the moment stop() or play() is called,
   * or when a new playQueue() call begins.
   */
  const playQueue = useCallback(async (segments) => {
    if (!enabled || !segments?.length) return;

    // Cancel any previously running queue and silence current audio
    _stopAll();

    const ctrl = new AbortController();
    _activeAbort = ctrl;

    for (const segment of segments) {
      if (ctrl.signal.aborted) return;

      const text = segment?.text ?? segment;
      const url  = await _getUrl(text, apiKey);

      if (!url || ctrl.signal.aborted) return;

      // A concurrent play() call could have replaced _activeAudio between
      // the async _getUrl call above and here — stop it cleanly.
      if (_activeAudio) {
        _activeAudio.pause();
        _activeAudio = null;
      }

      const audio = new Audio(url);
      _activeAudio = audio;

      try {
        await audio.play();
      } catch {
        return; // Autoplay blocked — give up gracefully
      }

      // Wait for the clip to finish, or bail out if cancelled
      await new Promise(resolve => {
        const finish = () => {
          audio.removeEventListener('ended', finish);
          audio.removeEventListener('error', finish);
          resolve();
        };
        audio.addEventListener('ended', finish);
        audio.addEventListener('error', finish);

        // Immediately resolve when the queue is aborted
        ctrl.signal.addEventListener('abort', () => {
          audio.pause();
          audio.removeEventListener('ended', finish);
          audio.removeEventListener('error', finish);
          resolve();
        }, { once: true });
      });
    }

    if (_activeAbort === ctrl) _activeAbort = null;
  }, [enabled, apiKey]);

  /** Stop all audio immediately (shared across every component). */
  const stop = useCallback(() => _stopAll(), []);

  return { play, playQueue, stop };
}
