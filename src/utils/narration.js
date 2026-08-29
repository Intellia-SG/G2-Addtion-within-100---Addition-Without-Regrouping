// src/utils/narration.js
// Narration script builder for AdditionQuest
// Strictly matches on-screen text 1:1 parity for ElevenLabs TTS

export const say       = (text) => ({ text, style: 'statement' });
export const ask       = (text) => ({ text, style: 'question' });
export const cheer     = (text) => ({ text, style: 'celebration' });
export const emphasize = (text) => ({ text, style: 'emphasis' });
export const think     = (text) => ({ text, style: 'thinking' });
export const instruct  = (text) => ({ text, style: 'instruction' });
export const encourage = (text) => ({ text, style: 'encouragement' });

export function introNarration() {
  return [
    say("Welcome to AdditionQuest! Master 2-Digit Addition without Regrouping!"),
    say("Hi! I'm Addie the Math Fox. Ready to group tens, count ones, and add big numbers together?"),
  ];
}

export function wonderNarration() {
  return [
    say("Welcome to AdditionQuest! Let's investigate the big addition mystery!"),
    say("If Leo has 23 sweet mangoes in one crate, and Maya has 14 crisp apples in another crate…"),
    ask("How many fresh fruits do they have altogether, and how can we add them using tens and ones?"),
    cheer("Let's investigate how tens and ones combine without regrouping!"),
  ];
}

export function storyNarration(panel) {
  const scripts = [
    [
      say("Leo loves math! One sunny morning, his teacher Ms. Parker announced an exciting field trip to Sunnyvale Market."),
      say("Today we will learn how to add two-digit numbers using groups of tens and ones!"),
      cheer("Leo and his friend Maya could hardly wait!"),
    ],
    [
      say("At the market, the friendly fruit seller smiled and pointed to two wooden crates."),
      say("In this crate, I have 23 ripe sweet mangoes. In the other crate, I have 14 crisp red apples."),
      ask("How many fresh fruits do I have altogether? Leo looked closely at both crates."),
    ],
    [
      say("Maya remembered Ms. Parker's golden rule: Split numbers into Tens and Ones!"),
      say("For 23 and 14: first add the tens: 2 tens plus 1 ten equals 3 tens, which is 30."),
      say("Then add the ones: 3 ones plus 4 ones equals 7 ones, which is 7."),
      cheer("Combine them: 30 plus 7 equals 37! Since 7 is less than 10, no regrouping is needed!"),
    ],
    [
      cheer("37 fruits in all! shouted Leo proudly."),
      say("The fruit seller clapped joyfully and handed Leo and Maya shiny fruit badges."),
      say("Whenever the ones digits add to 9 or less, adding is as simple as adding tens and ones separately!"),
      cheer("Now they were ready to practice and become Addition Masters!"),
    ],
  ];

  return scripts[panel] || scripts[0];
}

// ═══════════════════════════════════════════════════════════════
// SIMULATE PHASE — Redesigned Rich Station Narration
// ═══════════════════════════════════════════════════════════════

export function simStationIntro(stationIdx) {
  const intros = [
    // Station A — Block Builder Arena
    [
      cheer("Welcome to the Block Builder Arena!"),
      instruct("Your mission: Build each number using golden Tens rods and green Ones cubes!"),
      instruct("Tap the plus buttons to add rods and cubes. When both numbers are built correctly, hit Combine to watch the magic happen!"),
      encourage("The rods and cubes will join together to reveal the total sum. Let's build!"),
    ],
    // Station B — Column Splitter Machine
    [
      cheer("Welcome to the Column Splitter Machine!"),
      instruct("This amazing machine splits numbers into Tens and Ones columns, just like a real place value chart!"),
      instruct("Step 1: Solve the Ones column first — tap the correct digit on the keypad. Step 2: Solve the Tens column next!"),
      encourage("The glowing column shows which one to solve. Use the keypad and check your answer!"),
    ],
    // Station C — Bakery Crate Packer
    [
      cheer("Welcome to the Bakery Crate Packer!"),
      instruct("A big customer order just arrived! You need to pack the right number of boxes and singles."),
      instruct("Each box holds exactly 10 treats. Add boxes of 10 and single treats until the total matches the order!"),
      encourage("Count carefully — the bakery is counting on you to deliver the perfect crate!"),
    ],
    // Station D — Addition Inspector
    [
      cheer("Welcome to the Addition Inspector Lab!"),
      instruct("Detective Addie needs your help! Students have turned in their math worksheets, and some have sneaky mistakes."),
      instruct("Look at each student's addition carefully. Check the tens column, then the ones column."),
      encourage("If you spot an error, tap Has a Mistake and type the correct answer. Sharp eyes, detective!"),
    ],
  ];

  return intros[stationIdx] || intros[0];
}

// Station-specific micro-narrations for in-game events
export function simBlocksCombinedNarration(totalTens, totalOnes, sum) {
  return [
    cheer("Blocks combined!"),
    say(`${totalTens} tens and ${totalOnes} ones join together to make ${sum}!`),
    encourage("Now verify the sum to complete this round!"),
  ];
}

export function simBlocksVerifiedNarration(sum) {
  return [
    cheer(`${sum} is correct! Fantastic block building!`),
  ];
}

export function simColumnOnesCorrectNarration(onesSum) {
  return [
    cheer(`${onesSum} is right! Ones column solved!`),
    instruct("Now solve the Tens column!"),
  ];
}

export function simColumnTensCorrectNarration(tensCount) {
  return [
    cheer(`${tensCount} tens is correct! Both columns solved!`),
    encourage("Combine them to lock in your answer!"),
  ];
}

export function simColumnWrongNarration() {
  return [
    think("That's not quite right. Count carefully and try again!"),
  ];
}

export function simPackerVerifiedNarration(total) {
  return [
    cheer(`Perfect packing! ${total} items delivered!`),
    encourage("The bakery customer is delighted!"),
  ];
}

export function simPackerWrongNarration() {
  return [
    think("The crate doesn't match the order yet. Check your boxes and singles!"),
  ];
}

export function simDetectiveCorrectVerdictNarration(studentName) {
  return [
    cheer(`Great detective work! You correctly judged ${studentName}'s work!`),
  ];
}

export function simDetectiveWrongVerdictNarration() {
  return [
    think("Look more carefully at each column. The error might be hiding in the ones!"),
  ];
}

export function simDetectiveCaseClosedNarration(studentName, correctAnswer) {
  return [
    cheer(`Case closed! The true answer is ${correctAnswer}. Excellent inspection, detective!`),
  ];
}

export function simStationCompleteNarration(stationLabel) {
  return [
    cheer(`Station ${stationLabel} complete! You're a superstar!`),
    encourage("Moving to the next station!"),
  ];
}

export function simAllStationsCompleteNarration() {
  return [
    cheer("All four simulation stations complete! You've mastered the hands-on labs!"),
    emphasize("Time to put your skills to the test in the Practice Phase!"),
  ];
}

// ═══════════════════════════════════════════════════════════════
// PLAY PHASE NARRATION
// ═══════════════════════════════════════════════════════════════

export function playQuestionNarration(questionText) {
  return [ask(questionText)];
}

export function playCorrectNarration(streak = 1) {
  if (streak >= 5) return [cheer("Incredible streak! You are unstoppable! 🔥")];
  if (streak >= 3) return [cheer("Awesome! Three in a row! ⭐")];
  return [cheer("Spot on! That's correct! 🎉")];
}

export function playWrongNarration() {
  return [think("Not quite — check the hint, count the tens and ones carefully, and try again! 💡")];
}

export function playHint1Narration() {
  return [encourage("Here's your first hint! Look at the ones digits first, then look at the tens.")];
}

export function playHint2Narration() {
  return [encourage("Here's your final clue! Break down the tens and ones step by step.")];
}

export function districtCompleteNarration() {
  return [cheer("World Complete! Spectacular job on this addition world! 🌟")];
}

export function bossStartNarration() {
  return [emphasize("The Boss Battle begins! Answer correctly to defeat the boss and claim your badge!")];
}

export function bossWinNarration() {
  return [cheer("Victory! You defeated the boss and claimed the World Badge! 👑")];
}

// ═══════════════════════════════════════════════════════════════
// REFLECT PHASE NARRATION
// ═══════════════════════════════════════════════════════════════

export function reflectNarration() {
  return [say("Welcome to the Reflect Phase! Let's review the key addition concepts and check your scorecard! 📓")];
}

export function reflectCompleteNarration() {
  return [cheer("Outstanding! You have mastered 2-digit addition without regrouping! You are a true Addition Grand Master! 🏆")];
}

export default {
  say, ask, cheer, emphasize, think, instruct, encourage,
  introNarration, wonderNarration, storyNarration,
  simStationIntro,
  simBlocksCombinedNarration, simBlocksVerifiedNarration,
  simColumnOnesCorrectNarration, simColumnTensCorrectNarration, simColumnWrongNarration,
  simPackerVerifiedNarration, simPackerWrongNarration,
  simDetectiveCorrectVerdictNarration, simDetectiveWrongVerdictNarration, simDetectiveCaseClosedNarration,
  simStationCompleteNarration, simAllStationsCompleteNarration,
  playQuestionNarration, playCorrectNarration, playWrongNarration,
  playHint1Narration, playHint2Narration, districtCompleteNarration,
  bossStartNarration, bossWinNarration,
  reflectNarration, reflectCompleteNarration,
};
