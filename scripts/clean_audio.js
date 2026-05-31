#!/usr/bin/env node
/**
 * Audio Cleanup Script
 * Removes .mp3 files from public/assets/audio/ that are no longer
 * referenced in src/utils/audioMap.js
 *
 * Usage: node scripts/clean_audio.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname  = path.dirname(fileURLToPath(import.meta.url));
const ROOT       = path.resolve(__dirname, '..');
const AUDIO_DIR  = path.join(ROOT, 'public', 'assets', 'audio');
const MAP_FILE   = path.join(ROOT, 'src', 'utils', 'audioMap.js');

async function main() {
  if (!fs.existsSync(AUDIO_DIR)) {
    console.log('No audio directory found — nothing to clean.');
    return;
  }

  // Dynamically import audioMap
  let audioMap = {};
  try {
    const mod = await import(pathToFileURL(MAP_FILE).href);
    audioMap = mod.audioMap ?? {};
  } catch {
    console.error('Could not load audioMap.js — aborting to avoid deleting valid files.');
    process.exit(1);
  }

  const validFiles = new Set(
    Object.values(audioMap).map(p => path.basename(p))
  );

  const allFiles = fs.readdirSync(AUDIO_DIR).filter(f => f.endsWith('.mp3'));
  let removed = 0;

  for (const file of allFiles) {
    if (!validFiles.has(file)) {
      fs.unlinkSync(path.join(AUDIO_DIR, file));
      console.log(`🗑️  Removed: ${file}`);
      removed++;
    }
  }

  console.log(`\n✅  Cleanup complete. Removed ${removed} orphaned file(s).`);
}

main().catch(e => { console.error(e); process.exit(1); });
