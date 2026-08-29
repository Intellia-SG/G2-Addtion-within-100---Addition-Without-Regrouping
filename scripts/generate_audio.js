// scripts/generate_audio.js
// Offline pre-generation script for ElevenLabs narration audio files.
// Strictly follows audio_generation_pipeline (5).md specifications.

import fs from 'fs';
import path from 'path';

// Helper to read environment variables without external dependencies
function loadEnv() {
  const envFiles = ['.env.local', '.env'];
  for (const file of envFiles) {
    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file, 'utf-8');
      for (const line of content.split('\n')) {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
          const [key, ...rest] = trimmed.split('=');
          const val = rest.join('=').replace(/^["']|["']$/g, '').trim();
          if (!process.env[key.trim()]) {
            process.env[key.trim()] = val;
          }
        }
      }
    }
  }
}

loadEnv();

const apiKey = process.env.VITE_ELEVENLABS_API_KEY || process.env.ELEVENLABS_API_KEY;
if (!apiKey) {
  console.error("\n❌ Error: VITE_ELEVENLABS_API_KEY is not defined in .env.local or .env.");
  console.log("Please create a .env.local file with: VITE_ELEVENLABS_API_KEY=your_key_here\n");
  process.exit(1);
}

const VOICE_ID = 'Xb7hH8MSUJpSbSDYk0k2'; // Alice — Clear, Engaging Educator
const VOICE_MODEL = 'eleven_multilingual_v2';

const VOICE_SETTINGS = {
  statement:     { stability: 0.65, similarity_boost: 0.80, style: 0.30, use_speaker_boost: true },
  instruction:   { stability: 0.65, similarity_boost: 0.80, style: 0.30, use_speaker_boost: true },
  question:      { stability: 0.55, similarity_boost: 0.75, style: 0.50, use_speaker_boost: true },
  encouragement: { stability: 0.50, similarity_boost: 0.85, style: 0.60, use_speaker_boost: true },
  emphasis:      { stability: 0.75, similarity_boost: 0.90, style: 0.20, use_speaker_boost: true },
  thinking:      { stability: 0.70, similarity_boost: 0.78, style: 0.40, use_speaker_boost: true },
  celebration:   { stability: 0.45, similarity_boost: 0.85, style: 0.80, use_speaker_boost: true },
};

const phrases = [
  // ─── INTRO ────────────────────────────────────────────────────────────────
  { text: "Welcome to AdditionQuest! Master 2-Digit Addition without Regrouping!", style: 'celebration' },
  { text: "Hi! I'm Addie the Math Fox. Ready to group tens, count ones, and add big numbers together?", style: 'encouragement' },

  // ─── WONDER PHASE ────────────────────────────────────────────────────────
  { text: "Welcome to AdditionQuest! Let's investigate the big addition mystery!", style: 'celebration' },
  { text: "If Leo has 23 sweet mangoes in one crate, and Maya has 14 crisp apples in another crate…", style: 'statement' },
  { text: "How many fresh fruits do they have altogether, and how can we add them using tens and ones?", style: 'question' },
  { text: "Let's investigate how tens and ones combine without regrouping!", style: 'celebration' },

  // ─── STORY PHASE: PANEL 1 ────────────────────────────────────────────────
  { text: "Leo loves math! One sunny morning, his teacher Ms. Parker announced an exciting field trip to Sunnyvale Market.", style: 'statement' },
  { text: "Today we will learn how to add two-digit numbers using groups of tens and ones!", style: 'instruction' },
  { text: "Leo and his friend Maya could hardly wait!", style: 'celebration' },

  // ─── STORY PHASE: PANEL 2 ────────────────────────────────────────────────
  { text: "At the market, the friendly fruit seller smiled and pointed to two wooden crates.", style: 'statement' },
  { text: "In this crate, I have 23 ripe sweet mangoes. In the other crate, I have 14 crisp red apples.", style: 'statement' },
  { text: "How many fresh fruits do I have altogether? Leo looked closely at both crates.", style: 'question' },

  // ─── STORY PHASE: PANEL 3 ────────────────────────────────────────────────
  { text: "Maya remembered Ms. Parker's golden rule: Split numbers into Tens and Ones!", style: 'emphasis' },
  { text: "For 23 and 14: first add the tens: 2 tens plus 1 ten equals 3 tens, which is 30.", style: 'instruction' },
  { text: "Then add the ones: 3 ones plus 4 ones equals 7 ones, which is 7.", style: 'instruction' },
  { text: "Combine them: 30 plus 7 equals 37! Since 7 is less than 10, no regrouping is needed!", style: 'celebration' },

  // ─── STORY PHASE: PANEL 4 ────────────────────────────────────────────────
  { text: "37 fruits in all! shouted Leo proudly.", style: 'celebration' },
  { text: "The fruit seller clapped joyfully and handed Leo and Maya shiny fruit badges.", style: 'statement' },
  { text: "Whenever the ones digits add to 9 or less, adding is as simple as adding tens and ones separately!", style: 'emphasis' },
  { text: "Now they were ready to practice and become Addition Masters!", style: 'celebration' },

  // ═══════════════════════════════════════════════════════════════════════════
  // SIMULATE PHASE — Station A: Block Builder Arena
  // ═══════════════════════════════════════════════════════════════════════════
  { text: "Welcome to the Block Builder Arena!", style: 'celebration' },
  { text: "Your mission: Build each number using golden Tens rods and green Ones cubes!", style: 'instruction' },
  { text: "Tap the plus buttons to add rods and cubes. When both numbers are built correctly, hit Combine to watch the magic happen!", style: 'instruction' },
  { text: "The rods and cubes will join together to reveal the total sum. Let's build!", style: 'encouragement' },
  { text: "Blocks combined!", style: 'celebration' },
  { text: "Now verify the sum to complete this round!", style: 'encouragement' },

  // ═══════════════════════════════════════════════════════════════════════════
  // SIMULATE PHASE — Station B: Column Splitter Machine
  // ═══════════════════════════════════════════════════════════════════════════
  { text: "Welcome to the Column Splitter Machine!", style: 'celebration' },
  { text: "This amazing machine splits numbers into Tens and Ones columns, just like a real place value chart!", style: 'instruction' },
  { text: "Step 1: Solve the Ones column first — tap the correct digit on the keypad. Step 2: Solve the Tens column next!", style: 'instruction' },
  { text: "The glowing column shows which one to solve. Use the keypad and check your answer!", style: 'encouragement' },
  { text: "Ones column solved!", style: 'celebration' },
  { text: "Now solve the Tens column!", style: 'instruction' },
  { text: "Both columns solved!", style: 'celebration' },
  { text: "Combine them to lock in your answer!", style: 'encouragement' },
  { text: "That's not quite right. Count carefully and try again!", style: 'thinking' },

  // ═══════════════════════════════════════════════════════════════════════════
  // SIMULATE PHASE — Station C: Bakery Crate Packer
  // ═══════════════════════════════════════════════════════════════════════════
  { text: "Welcome to the Bakery Crate Packer!", style: 'celebration' },
  { text: "A big customer order just arrived! You need to pack the right number of boxes and singles.", style: 'instruction' },
  { text: "Each box holds exactly 10 treats. Add boxes of 10 and single treats until the total matches the order!", style: 'instruction' },
  { text: "Count carefully — the bakery is counting on you to deliver the perfect crate!", style: 'encouragement' },
  { text: "The bakery customer is delighted!", style: 'celebration' },
  { text: "The crate doesn't match the order yet. Check your boxes and singles!", style: 'thinking' },

  // ═══════════════════════════════════════════════════════════════════════════
  // SIMULATE PHASE — Station D: Addition Inspector
  // ═══════════════════════════════════════════════════════════════════════════
  { text: "Welcome to the Addition Inspector Lab!", style: 'celebration' },
  { text: "Detective Addie needs your help! Students have turned in their math worksheets, and some have sneaky mistakes.", style: 'instruction' },
  { text: "Look at each student's addition carefully. Check the tens column, then the ones column.", style: 'instruction' },
  { text: "If you spot an error, tap Has a Mistake and type the correct answer. Sharp eyes, detective!", style: 'encouragement' },
  { text: "Look more carefully at each column. The error might be hiding in the ones!", style: 'thinking' },

  // ═══════════════════════════════════════════════════════════════════════════
  // SIMULATE PHASE — Shared Station Narration
  // ═══════════════════════════════════════════════════════════════════════════
  { text: "Moving to the next station!", style: 'encouragement' },
  { text: "All four simulation stations complete! You've mastered the hands-on labs!", style: 'celebration' },
  { text: "Time to put your skills to the test in the Practice Phase!", style: 'emphasis' },

  // ─── FEEDBACK & HINTS ────────────────────────────────────────────────────
  { text: "Spot on! That's correct! 🎉", style: 'celebration' },
  { text: "Awesome! Three in a row! ⭐", style: 'celebration' },
  { text: "Incredible streak! You are unstoppable! 🔥", style: 'celebration' },
  { text: "Not quite — check the hint, count the tens and ones carefully, and try again! 💡", style: 'thinking' },
  { text: "Here's your first hint! Look at the ones digits first, then look at the tens.", style: 'encouragement' },
  { text: "Here's your final clue! Break down the tens and ones step by step.", style: 'encouragement' },

  // ─── DISTRICT & BOSS BATTLES ─────────────────────────────────────────────
  { text: "World Complete! Spectacular job on this addition world! 🌟", style: 'celebration' },
  { text: "The Boss Battle begins! Answer correctly to defeat the boss and claim your badge!", style: 'emphasis' },
  { text: "Victory! You defeated the boss and claimed the World Badge! 👑", style: 'celebration' },

  // ─── REFLECT PHASE ───────────────────────────────────────────────────────
  { text: "Welcome to the Reflect Phase! Let's review the key addition concepts and check your scorecard! 📓", style: 'statement' },
  { text: "Outstanding! You have mastered 2-digit addition without regrouping! You are a true Addition Grand Master! 🏆", style: 'celebration' },
];

const outputDir = './public/assets/audio';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function cleanString(str) {
  return str.toLowerCase().replace(/[^a-z0-9]/g, '_').substring(0, 45).replace(/_+/g, '_').replace(/^_|_$/g, '');
}

async function main() {
  console.log(`\n🎙️ Starting ElevenLabs Audio Generation Pipeline for AdditionQuest`);
  console.log(`Voice ID: ${VOICE_ID} | Model: ${VOICE_MODEL}`);
  console.log(`Total phrases to process: ${phrases.length}\n`);

  const mapping = {};

  for (let i = 0; i < phrases.length; i++) {
    const { text, style } = phrases[i];
    const cleanText = cleanString(text);
    const fileName = `audio_${cleanText}_${i}.mp3`;
    const destPath = path.join(outputDir, fileName);

    const relativeWebPath = `/assets/audio/${fileName}`;
    mapping[text] = relativeWebPath;

    if (fs.existsSync(destPath)) {
      console.log(`[${i + 1}/${phrases.length}] ⏩ Skipped (already exists): ${fileName}`);
      continue;
    }

    console.log(`[${i + 1}/${phrases.length}] 🔊 Generating: "${text.substring(0, 40)}..." -> ${fileName}`);

    const settings = VOICE_SETTINGS[style] || VOICE_SETTINGS.statement;

    try {
      const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`, {
        method: 'POST',
        headers: {
          'xi-api-key': apiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text,
          model_id: VOICE_MODEL,
          voice_settings: settings,
        }),
      });

      if (!response.ok) {
        const errBody = await response.text();
        throw new Error(`HTTP ${response.status}: ${errBody}`);
      }

      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      fs.writeFileSync(destPath, buffer);
      console.log(`   ✅ Saved: ${destPath}`);
    } catch (e) {
      console.error(`   ❌ Failed to generate phrase "${text}":`, e.message);
    }
  }

  // Write mapping to src/utils/audioMap.js
  const mapContent = `// Auto-generated by generate_audio.js\n// Static asset mapping for offline generated narration phrases in AdditionQuest\n\nexport const audioMap = ${JSON.stringify(mapping, null, 2)};\n\nexport default audioMap;\n`;
  fs.writeFileSync('./src/utils/audioMap.js', mapContent);
  console.log("\n✨ Audio mapping updated in src/utils/audioMap.js!");
  console.log("🎉 Audio generation script completed successfully!\n");
}

main().catch(console.error);
