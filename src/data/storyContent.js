// src/data/storyContent.js
// 4-Panel Educational Story for 2-Digit Addition without Regrouping (Grade 2 Math)

export const STORY_PANELS = [
  {
    panel: 0,
    title: "The Sunnyvale Market Adventure!",
    text: "Leo loves math! One sunny morning, his teacher Ms. Parker announced an exciting field trip to Sunnyvale Market. \"Today we will learn how to add two-digit numbers using groups of tens and ones!\" Leo and his friend Maya could hardly wait.",
    highlight: "✨ Addition means combining groups together! ✨",
    character: "Leo",
    characterEmoji: "👦",
    imageBg: "linear-gradient(135deg, #1e3a5f 0%, #0f2346 100%)",
    imageEmoji: "🏫",
  },
  {
    panel: 1,
    title: "The Market Fruit Challenge!",
    text: "At the market, the friendly fruit seller smiled and pointed to two wooden crates. \"In this crate, I have 23 ripe sweet mangoes. In the other crate, I have 14 crisp red apples. How many fresh fruits do I have altogether?\" Leo looked closely at both crates.",
    highlight: "✨ \"How can we add 23 and 14 without mixing up the digits?\" ✨",
    character: "Maya",
    characterEmoji: "👧",
    imageBg: "linear-gradient(135deg, #3b1f2b 0%, #1a0f1e 100%)",
    imageEmoji: "🍎",
  },
  {
    panel: 2,
    title: "Tens and Ones to the Rescue!",
    text: "Maya remembered Ms. Parker's golden rule: Split numbers into Tens and Ones! For 23 and 14: first add the tens: 2 tens + 1 ten = 3 tens (30). Then add the ones: 3 ones + 4 ones = 7 ones (7). Combine them: 30 + 7 = 37! Since the ones sum is 7 (less than 10), no regrouping is needed!",
    highlight: "⭐ Tens: 20 + 10 = 30 · Ones: 3 + 4 = 7 · Total: 37 ⭐",
    character: "Leo",
    characterEmoji: "👦",
    imageBg: "linear-gradient(135deg, #1a3a2b 0%, #0f2017 100%)",
    imageEmoji: "🧮",
  },
  {
    panel: 3,
    title: "Leo & Maya Solve It!",
    text: "\"37 fruits in all!\" shouted Leo proudly. The fruit seller clapped joyfully and handed Leo and Maya shiny fruit badges. \"Whenever the ones digits add to 9 or less, adding is as simple as adding tens and ones separately!\" Now they were ready to practice and become Addition Masters!",
    highlight: "🌟 23 + 14 = 37 · Addition Without Regrouping Mastered! 🌟",
    character: "Ms. Parker",
    characterEmoji: "👩‍🏫",
    imageBg: "linear-gradient(135deg, #2d1b6b 0%, #140d3a 100%)",
    imageEmoji: "🏆",
  },
];

export const storyPanels = STORY_PANELS;
export default STORY_PANELS;
