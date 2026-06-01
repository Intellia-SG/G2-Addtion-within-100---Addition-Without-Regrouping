#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pathToFileURL } from 'url';
import { worlds } from '../src/data/questionBank.js';
import { storyPanels } from '../src/data/storyContent.js';
import {
  introNarration,
  wonderNarration,
  storyNarration,
  simulateNarration,
  feedbackNarration,
  reflectNarration,
} from '../src/utils/narration.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const AUDIO_DIR = path.join(ROOT, 'public', 'assets', 'audio');
const MAP_FILE = path.join(ROOT, 'src', 'utils', 'audioMap.js');

function collectTextEntries() {
  const entries = [];

  entries.push(...introNarration());
  entries.push(...wonderNarration());
  for (let i = 0; i < 4; i++) entries.push(...storyNarration(i));
  for (let i = 0; i < 3; i++) entries.push(...simulateNarration(i));
  entries.push(...feedbackNarration(true));
  entries.push(...feedbackNarration(false));
  entries.push(...reflectNarration());

  for (const world of worlds) {
    for (const question of world.questions) {
      entries.push({ text: question.text, style: 'question' });
    }
  }

  // Also include full story panel texts and mascot speeches
  for (const p of storyPanels) {
    if (p.text) entries.push({ text: p.text, style: 'statement' });
    if (p.mascotSpeech) entries.push({ text: p.mascotSpeech, style: 'statement' });
  }

  const seen = new Set();
  return entries.filter(entry => {
    if (seen.has(entry.text)) return false;
    seen.add(entry.text);
    return true;
  }).map(e => e.text);
}

async function main() {
  const phrases = collectTextEntries();

  let existingMap = {};
  try {
    const mod = await import(pathToFileURL(MAP_FILE).href);
    existingMap = mod.audioMap ?? {};
  } catch {
    existingMap = {};
  }

  const missing = [];
  for (const text of phrases) {
    const url = existingMap[text];
    if (!url) {
      missing.push({ text, reason: 'no map entry' });
      continue;
    }
    const filepath = path.join(ROOT, 'public', url.replace(/^\//, ''));
    if (!fs.existsSync(filepath)) missing.push({ text, reason: `missing file ${filepath}` });
  }

  if (missing.length === 0) {
    console.log('All narration phrases have audio files.');
    process.exit(0);
  }

  console.log(`Found ${missing.length} missing narration entries:\n`);
  missing.forEach((m, i) => {
    console.log(`${i + 1}. ${m.text} — ${m.reason}`);
  });

  console.log(`\nTo generate these, run:\n  ELEVENLABS_API_KEY=your_key node scripts/generate_audio.js`);
}

main().catch(e => { console.error(e); process.exit(1); });
