// src/data/questionBank.js
// 100 Comprehensive Questions for AdditionQuest across 10 Themed Worlds (Grade 2 Math)
// Every question strictly adheres to Addition Without Regrouping:
// (ones digits sum <= 9, tens digits sum <= 9, total sum <= 99)

export const DISTRICTS = [
  { id: 0, name: 'Number Village',  icon: '🏠', boss: { name: 'Block Golem',      emoji: '🧱', reward: 'Village Star Badge 🏠' } },
  { id: 1, name: 'Tens Town',       icon: '🏙️', boss: { name: 'Tens Titan',       emoji: '🔟', reward: 'Tens Master Badge 🏙️' } },
  { id: 2, name: 'Sunnyvale Market',icon: '🍎', boss: { name: 'Market Boss',      emoji: '🍉', reward: 'Market Pro Badge 🍎' } },
  { id: 3, name: 'Toy Workshop',    icon: '🧸', boss: { name: 'Toy Crafter',      emoji: '🤖', reward: 'Toy Builder Badge 🧸' } },
  { id: 4, name: 'Garden Grove',    icon: '🌻', boss: { name: 'Garden Keeper',    emoji: '🦋', reward: 'Garden Hero Badge 🌻' } },
  { id: 5, name: 'River Rapids',    icon: '🌊', boss: { name: 'River Captain',    emoji: '⛵', reward: 'Rapids Ace Badge 🌊' } },
  { id: 6, name: 'Bakery Express',  icon: '🧁', boss: { name: 'Master Baker',     emoji: '🥐', reward: 'Baker Star Badge 🧁' } },
  { id: 7, name: 'Cloud Castle',    icon: '☁️', boss: { name: 'Cloud Wizard',     emoji: '🧙‍♂️', reward: 'Castle Champ Badge ☁️' } },
  { id: 8, name: 'Dragon Den',      icon: '🐉', boss: { name: 'Dragon King',      emoji: '👑', reward: 'Dragon Slayer Badge 🐉' } },
  { id: 9, name: 'Champion Peak',   icon: '🏆', boss: { name: 'Math Grand Master',emoji: '🌟', reward: 'Addition Grand Master 🏆' } },
];

export const RAW_QUESTIONS = [
  // ── WORLD 0: NUMBER VILLAGE (Questions 1 - 10: Single Digit Foundations) ────
  {
    id: 1, districtId: 0, category: 'SINGLE DIGITS', visual: 'blocks',
    questionText: "What is 3 + 4?",
    options: ['7', '6', '8', '9'],
    correctAnswer: '7',
    explanation: "3 + 4 = 7. Count on from 3: 4, 5, 6, 7.",
    hint1: "Start with 4 and count up 3 more.",
    hint2: "4 + 3 = 7.",
    visualData: { num1: 3, tens1: 0, ones1: 3, num2: 4, tens2: 0, ones2: 4, sum: 7 }
  },
  {
    id: 2, districtId: 0, category: 'SINGLE DIGITS', visual: 'blocks',
    questionText: "What is 5 + 2?",
    options: ['7', '6', '8', '9'],
    correctAnswer: '7',
    explanation: "5 + 2 = 7. 5 ones plus 2 ones equals 7.",
    hint1: "Start with 5 and count on: 6, 7.",
    hint2: "5 + 2 = 7.",
    visualData: { num1: 5, tens1: 0, ones1: 5, num2: 2, tens2: 0, ones2: 2, sum: 7 }
  },
  {
    id: 3, districtId: 0, category: 'SINGLE DIGITS', visual: 'blocks',
    questionText: "What is 6 + 3?",
    options: ['9', '8', '7', '10'],
    correctAnswer: '9',
    explanation: "6 + 3 = 9. 6 ones plus 3 ones equals 9.",
    hint1: "Count on 3 from 6: 7, 8, 9.",
    hint2: "6 + 3 = 9.",
    visualData: { num1: 6, tens1: 0, ones1: 6, num2: 3, tens2: 0, ones2: 3, sum: 9 }
  },
  {
    id: 4, districtId: 0, category: 'SINGLE DIGITS', visual: 'blocks',
    questionText: "What is 4 + 4?",
    options: ['8', '7', '9', '6'],
    correctAnswer: '8',
    explanation: "4 + 4 = 8. Double 4 equals 8.",
    hint1: "Think of your doubles: 4 and 4.",
    hint2: "4 + 4 = 8.",
    visualData: { num1: 4, tens1: 0, ones1: 4, num2: 4, tens2: 0, ones2: 4, sum: 8 }
  },
  {
    id: 5, districtId: 0, category: 'SINGLE DIGITS', visual: 'blocks',
    questionText: "What is 2 + 6?",
    options: ['8', '7', '9', '10'],
    correctAnswer: '8',
    explanation: "2 + 6 = 8. Start with the larger number 6 and add 2: 7, 8.",
    hint1: "Start with 6 and count on 2.",
    hint2: "6 + 2 = 8.",
    visualData: { num1: 2, tens1: 0, ones1: 2, num2: 6, tens2: 0, ones2: 6, sum: 8 }
  },
  {
    id: 6, districtId: 0, category: 'SINGLE DIGITS', visual: 'blocks',
    questionText: "What is 1 + 7?",
    options: ['8', '7', '9', '6'],
    correctAnswer: '8',
    explanation: "1 + 7 = 8. Adding 1 to 7 gives 8.",
    hint1: "What number comes right after 7?",
    hint2: "7 + 1 = 8.",
    visualData: { num1: 1, tens1: 0, ones1: 1, num2: 7, tens2: 0, ones2: 7, sum: 8 }
  },
  {
    id: 7, districtId: 0, category: 'SINGLE DIGITS', visual: 'blocks',
    questionText: "What is 3 + 6?",
    options: ['9', '8', '7', '10'],
    correctAnswer: '9',
    explanation: "3 + 6 = 9. 6 + 3 = 9.",
    hint1: "Count on 3 from 6: 7, 8, 9.",
    hint2: "6 + 3 = 9.",
    visualData: { num1: 3, tens1: 0, ones1: 3, num2: 6, tens2: 0, ones2: 6, sum: 9 }
  },
  {
    id: 8, districtId: 0, category: 'SINGLE DIGITS', visual: 'blocks',
    questionText: "What is 5 + 3?",
    options: ['8', '7', '9', '6'],
    correctAnswer: '8',
    explanation: "5 + 3 = 8. 5 ones + 3 ones = 8 ones.",
    hint1: "Count on 3 from 5: 6, 7, 8.",
    hint2: "5 + 3 = 8.",
    visualData: { num1: 5, tens1: 0, ones1: 5, num2: 3, tens2: 0, ones2: 3, sum: 8 }
  },
  {
    id: 9, districtId: 0, category: 'SINGLE DIGITS', visual: 'blocks',
    questionText: "What is 2 + 5?",
    options: ['7', '6', '8', '9'],
    correctAnswer: '7',
    explanation: "2 + 5 = 7. Start at 5, count up 2: 6, 7.",
    hint1: "5 plus 2 more.",
    hint2: "5 + 2 = 7.",
    visualData: { num1: 2, tens1: 0, ones1: 2, num2: 5, tens2: 0, ones2: 5, sum: 7 }
  },
  {
    id: 10, districtId: 0, category: 'SINGLE DIGITS', visual: 'blocks',
    questionText: "What is 4 + 5?",
    options: ['9', '8', '7', '10'],
    correctAnswer: '9',
    explanation: "4 + 5 = 9. 5 plus 4 more equals 9.",
    hint1: "Start at 5, count on 4: 6, 7, 8, 9.",
    hint2: "5 + 4 = 9.",
    visualData: { num1: 4, tens1: 0, ones1: 4, num2: 5, tens2: 0, ones2: 5, sum: 9 }
  },

  // ── WORLD 1: TENS TOWN (Questions 11 - 20: Multiples of 10) ──────────────────
  {
    id: 11, districtId: 1, category: 'ADD TENS', visual: 'blocks',
    questionText: "What is 10 + 20?",
    options: ['30', '20', '40', '50'],
    correctAnswer: '30',
    explanation: "1 ten + 2 tens = 3 tens = 30.",
    hint1: "Add the tens digits: 1 + 2 = 3 tens.",
    hint2: "3 tens = 30.",
    visualData: { num1: 10, tens1: 1, ones1: 0, num2: 20, tens2: 2, ones2: 0, sum: 30 }
  },
  {
    id: 12, districtId: 1, category: 'ADD TENS', visual: 'blocks',
    questionText: "What is 20 + 30?",
    options: ['50', '40', '60', '70'],
    correctAnswer: '50',
    explanation: "2 tens + 3 tens = 5 tens = 50.",
    hint1: "2 tens (20) plus 3 tens (30) equals 5 tens.",
    hint2: "5 tens = 50.",
    visualData: { num1: 20, tens1: 2, ones1: 0, num2: 30, tens2: 3, ones2: 0, sum: 50 }
  },
  {
    id: 13, districtId: 1, category: 'ADD TENS', visual: 'blocks',
    questionText: "What is 40 + 10?",
    options: ['50', '40', '60', '30'],
    correctAnswer: '50',
    explanation: "4 tens + 1 ten = 5 tens = 50.",
    hint1: "4 tens plus 1 more ten.",
    hint2: "4 + 1 = 5 tens = 50.",
    visualData: { num1: 40, tens1: 4, ones1: 0, num2: 10, tens2: 1, ones2: 0, sum: 50 }
  },
  {
    id: 14, districtId: 1, category: 'ADD TENS', visual: 'blocks',
    questionText: "What is 30 + 40?",
    options: ['70', '60', '80', '50'],
    correctAnswer: '70',
    explanation: "3 tens + 4 tens = 7 tens = 70.",
    hint1: "Add 3 + 4 = 7 tens.",
    hint2: "7 tens is 70.",
    visualData: { num1: 30, tens1: 3, ones1: 0, num2: 40, tens2: 4, ones2: 0, sum: 70 }
  },
  {
    id: 15, districtId: 1, category: 'ADD TENS', visual: 'blocks',
    questionText: "What is 20 + 50?",
    options: ['70', '60', '80', '90'],
    correctAnswer: '70',
    explanation: "2 tens + 5 tens = 7 tens = 70.",
    hint1: "2 tens + 5 tens = 7 tens.",
    hint2: "7 tens = 70.",
    visualData: { num1: 20, tens1: 2, ones1: 0, num2: 50, tens2: 5, ones2: 0, sum: 70 }
  },
  {
    id: 16, districtId: 1, category: 'ADD TENS', visual: 'blocks',
    questionText: "What is 10 + 60?",
    options: ['70', '60', '80', '50'],
    correctAnswer: '70',
    explanation: "1 ten + 6 tens = 7 tens = 70.",
    hint1: "1 + 6 = 7 tens.",
    hint2: "7 tens = 70.",
    visualData: { num1: 10, tens1: 1, ones1: 0, num2: 60, tens2: 6, ones2: 0, sum: 70 }
  },
  {
    id: 17, districtId: 1, category: 'ADD TENS', visual: 'blocks',
    questionText: "What is 50 + 30?",
    options: ['80', '70', '90', '60'],
    correctAnswer: '80',
    explanation: "5 tens + 3 tens = 8 tens = 80.",
    hint1: "5 tens + 3 tens = 8 tens.",
    hint2: "8 tens is 80.",
    visualData: { num1: 50, tens1: 5, ones1: 0, num2: 30, tens2: 3, ones2: 0, sum: 80 }
  },
  {
    id: 18, districtId: 1, category: 'ADD TENS', visual: 'blocks',
    questionText: "What is 40 + 40?",
    options: ['80', '70', '90', '60'],
    correctAnswer: '80',
    explanation: "4 tens + 4 tens = 8 tens = 80.",
    hint1: "Double 4 tens.",
    hint2: "4 + 4 = 8 tens = 80.",
    visualData: { num1: 40, tens1: 4, ones1: 0, num2: 40, tens2: 4, ones2: 0, sum: 80 }
  },
  {
    id: 19, districtId: 1, category: 'ADD TENS', visual: 'blocks',
    questionText: "What is 60 + 20?",
    options: ['80', '70', '90', '85'],
    correctAnswer: '80',
    explanation: "6 tens + 2 tens = 8 tens = 80.",
    hint1: "6 tens + 2 tens = 8 tens.",
    hint2: "8 tens is 80.",
    visualData: { num1: 60, tens1: 6, ones1: 0, num2: 20, tens2: 2, ones2: 0, sum: 80 }
  },
  {
    id: 20, districtId: 1, category: 'ADD TENS', visual: 'blocks',
    questionText: "What is 30 + 60?",
    options: ['90', '80', '70', '85'],
    correctAnswer: '90',
    explanation: "3 tens + 6 tens = 9 tens = 90.",
    hint1: "3 + 6 = 9 tens.",
    hint2: "9 tens is 90.",
    visualData: { num1: 30, tens1: 3, ones1: 0, num2: 60, tens2: 6, ones2: 0, sum: 90 }
  },

  // ── WORLD 2: SUNNYVALE MARKET (Questions 21 - 30: 2-Digit + 1-Digit) ─────────
  {
    id: 21, districtId: 2, category: '2-DIGIT + 1-DIGIT', visual: 'blocks',
    questionText: "What is 21 + 5?",
    options: ['26', '25', '27', '36'],
    correctAnswer: '26',
    explanation: "Add the ones: 1 + 5 = 6. Tens remain 20. Total: 26.",
    hint1: "Add the ones digits first: 1 + 5 = 6.",
    hint2: "Combine with 20: 20 + 6 = 26.",
    visualData: { num1: 21, tens1: 2, ones1: 1, num2: 5, tens2: 0, ones2: 5, sum: 26 }
  },
  {
    id: 22, districtId: 2, category: '2-DIGIT + 1-DIGIT', visual: 'blocks',
    questionText: "What is 32 + 4?",
    options: ['36', '35', '37', '46'],
    correctAnswer: '36',
    explanation: "Ones: 2 + 4 = 6. Tens: 30. Total: 36.",
    hint1: "Add the ones: 2 + 4 = 6.",
    hint2: "30 + 6 = 36.",
    visualData: { num1: 32, tens1: 3, ones1: 2, num2: 4, tens2: 0, ones2: 4, sum: 36 }
  },
  {
    id: 23, districtId: 2, category: '2-DIGIT + 1-DIGIT', visual: 'blocks',
    questionText: "What is 43 + 3?",
    options: ['46', '45', '47', '56'],
    correctAnswer: '46',
    explanation: "Ones: 3 + 3 = 6. Tens: 40. Total: 46.",
    hint1: "3 ones + 3 ones = 6 ones.",
    hint2: "40 + 6 = 46.",
    visualData: { num1: 43, tens1: 4, ones1: 3, num2: 3, tens2: 0, ones2: 3, sum: 46 }
  },
  {
    id: 24, districtId: 2, category: '2-DIGIT + 1-DIGIT', visual: 'blocks',
    questionText: "What is 54 + 2?",
    options: ['56', '55', '57', '66'],
    correctAnswer: '56',
    explanation: "Ones: 4 + 2 = 6. Tens: 50. Total: 56.",
    hint1: "Add the ones: 4 + 2 = 6.",
    hint2: "50 + 6 = 56.",
    visualData: { num1: 54, tens1: 5, ones1: 4, num2: 2, tens2: 0, ones2: 2, sum: 56 }
  },
  {
    id: 25, districtId: 2, category: '2-DIGIT + 1-DIGIT', visual: 'blocks',
    questionText: "What is 61 + 7?",
    options: ['68', '67', '69', '78'],
    correctAnswer: '68',
    explanation: "Ones: 1 + 7 = 8. Tens: 60. Total: 68.",
    hint1: "Add the ones: 1 + 7 = 8.",
    hint2: "60 + 8 = 68.",
    visualData: { num1: 61, tens1: 6, ones1: 1, num2: 7, tens2: 0, ones2: 7, sum: 68 }
  },
  {
    id: 26, districtId: 2, category: '2-DIGIT + 1-DIGIT', visual: 'blocks',
    questionText: "What is 72 + 5?",
    options: ['77', '76', '78', '87'],
    correctAnswer: '77',
    explanation: "Ones: 2 + 5 = 7. Tens: 70. Total: 77.",
    hint1: "2 + 5 = 7 ones.",
    hint2: "70 + 7 = 77.",
    visualData: { num1: 72, tens1: 7, ones1: 2, num2: 5, tens2: 0, ones2: 5, sum: 77 }
  },
  {
    id: 27, districtId: 2, category: '2-DIGIT + 1-DIGIT', visual: 'blocks',
    questionText: "What is 80 + 9?",
    options: ['89', '88', '90', '99'],
    correctAnswer: '89',
    explanation: "Ones: 0 + 9 = 9. Tens: 80. Total: 89.",
    hint1: "80 plus 9 ones.",
    hint2: "80 + 9 = 89.",
    visualData: { num1: 80, tens1: 8, ones1: 0, num2: 9, tens2: 0, ones2: 9, sum: 89 }
  },
  {
    id: 28, districtId: 2, category: '2-DIGIT + 1-DIGIT', visual: 'blocks',
    questionText: "What is 15 + 4?",
    options: ['19', '18', '20', '17'],
    correctAnswer: '19',
    explanation: "Ones: 5 + 4 = 9. Tens: 10. Total: 19.",
    hint1: "5 + 4 = 9 ones.",
    hint2: "10 + 9 = 19.",
    visualData: { num1: 15, tens1: 1, ones1: 5, num2: 4, tens2: 0, ones2: 4, sum: 19 }
  },
  {
    id: 29, districtId: 2, category: '2-DIGIT + 1-DIGIT', visual: 'blocks',
    questionText: "What is 23 + 6?",
    options: ['29', '28', '30', '27'],
    correctAnswer: '29',
    explanation: "Ones: 3 + 6 = 9. Tens: 20. Total: 29.",
    hint1: "3 + 6 = 9 ones.",
    hint2: "20 + 9 = 29.",
    visualData: { num1: 23, tens1: 2, ones1: 3, num2: 6, tens2: 0, ones2: 6, sum: 29 }
  },
  {
    id: 30, districtId: 2, category: '2-DIGIT + 1-DIGIT', visual: 'blocks',
    questionText: "What is 41 + 8?",
    options: ['49', '48', '50', '47'],
    correctAnswer: '49',
    explanation: "Ones: 1 + 8 = 9. Tens: 40. Total: 49.",
    hint1: "1 + 8 = 9 ones.",
    hint2: "40 + 9 = 49.",
    visualData: { num1: 41, tens1: 4, ones1: 1, num2: 8, tens2: 0, ones2: 8, sum: 49 }
  },

  // ── WORLD 3: TOY WORKSHOP (Questions 31 - 40: 2-Digit + 2-Digit Standard) ────
  {
    id: 31, districtId: 3, category: '2-DIGIT + 2-DIGIT', visual: 'blocks',
    questionText: "What is 11 + 22?",
    options: ['33', '32', '34', '43'],
    correctAnswer: '33',
    explanation: "Tens: 10 + 20 = 30. Ones: 1 + 2 = 3. Total: 33.",
    hint1: "Add tens (10+20=30), then ones (1+2=3).",
    hint2: "30 + 3 = 33.",
    visualData: { num1: 11, tens1: 1, ones1: 1, num2: 22, tens2: 2, ones2: 2, sum: 33 }
  },
  {
    id: 32, districtId: 3, category: '2-DIGIT + 2-DIGIT', visual: 'blocks',
    questionText: "What is 13 + 24?",
    options: ['37', '36', '38', '47'],
    correctAnswer: '37',
    explanation: "Tens: 10 + 20 = 30. Ones: 3 + 4 = 7. Total: 37.",
    hint1: "Tens: 1+2=3 tens. Ones: 3+4=7 ones.",
    hint2: "30 + 7 = 37.",
    visualData: { num1: 13, tens1: 1, ones1: 3, num2: 24, tens2: 2, ones2: 4, sum: 37 }
  },
  {
    id: 33, districtId: 3, category: '2-DIGIT + 2-DIGIT', visual: 'blocks',
    questionText: "What is 21 + 14?",
    options: ['35', '34', '36', '45'],
    correctAnswer: '35',
    explanation: "Tens: 20 + 10 = 30. Ones: 1 + 4 = 5. Total: 35.",
    hint1: "2 tens + 1 ten = 3 tens (30). 1 one + 4 ones = 5.",
    hint2: "30 + 5 = 35.",
    visualData: { num1: 21, tens1: 2, ones1: 1, num2: 14, tens2: 1, ones2: 4, sum: 35 }
  },
  {
    id: 34, districtId: 3, category: '2-DIGIT + 2-DIGIT', visual: 'blocks',
    questionText: "What is 23 + 14?",
    options: ['37', '36', '38', '47'],
    correctAnswer: '37',
    explanation: "Tens: 20 + 10 = 30. Ones: 3 + 4 = 7. Total: 37.",
    hint1: "Add tens: 20 + 10 = 30. Add ones: 3 + 4 = 7.",
    hint2: "30 + 7 = 37.",
    visualData: { num1: 23, tens1: 2, ones1: 3, num2: 14, tens2: 1, ones2: 4, sum: 37 }
  },
  {
    id: 35, districtId: 3, category: '2-DIGIT + 2-DIGIT', visual: 'blocks',
    questionText: "What is 31 + 25?",
    options: ['56', '55', '57', '66'],
    correctAnswer: '56',
    explanation: "Tens: 30 + 20 = 50. Ones: 1 + 5 = 6. Total: 56.",
    hint1: "3 tens + 2 tens = 5 tens (50). 1 + 5 = 6.",
    hint2: "50 + 6 = 56.",
    visualData: { num1: 31, tens1: 3, ones1: 1, num2: 25, tens2: 2, ones2: 5, sum: 56 }
  },
  {
    id: 36, districtId: 3, category: '2-DIGIT + 2-DIGIT', visual: 'blocks',
    questionText: "What is 32 + 15?",
    options: ['47', '46', '48', '57'],
    correctAnswer: '47',
    explanation: "Tens: 30 + 10 = 40. Ones: 2 + 5 = 7. Total: 47.",
    hint1: "30 + 10 = 40. 2 + 5 = 7.",
    hint2: "40 + 7 = 47.",
    visualData: { num1: 32, tens1: 3, ones1: 2, num2: 15, tens2: 1, ones2: 5, sum: 47 }
  },
  {
    id: 37, districtId: 3, category: '2-DIGIT + 2-DIGIT', visual: 'blocks',
    questionText: "What is 42 + 13?",
    options: ['55', '54', '56', '65'],
    correctAnswer: '55',
    explanation: "Tens: 40 + 10 = 50. Ones: 2 + 3 = 5. Total: 55.",
    hint1: "4 tens + 1 ten = 5 tens (50). 2 ones + 3 ones = 5.",
    hint2: "50 + 5 = 55.",
    visualData: { num1: 42, tens1: 4, ones1: 2, num2: 13, tens2: 1, ones2: 3, sum: 55 }
  },
  {
    id: 38, districtId: 3, category: '2-DIGIT + 2-DIGIT', visual: 'blocks',
    questionText: "What is 44 + 21?",
    options: ['65', '64', '66', '75'],
    correctAnswer: '65',
    explanation: "Tens: 40 + 20 = 60. Ones: 4 + 1 = 5. Total: 65.",
    hint1: "40 + 20 = 60. 4 + 1 = 5.",
    hint2: "60 + 5 = 65.",
    visualData: { num1: 44, tens1: 4, ones1: 4, num2: 21, tens2: 2, ones2: 1, sum: 65 }
  },
  {
    id: 39, districtId: 3, category: '2-DIGIT + 2-DIGIT', visual: 'blocks',
    questionText: "What is 51 + 23?",
    options: ['74', '73', '75', '84'],
    correctAnswer: '74',
    explanation: "Tens: 50 + 20 = 70. Ones: 1 + 3 = 4. Total: 74.",
    hint1: "50 + 20 = 70. 1 + 3 = 4.",
    hint2: "70 + 4 = 74.",
    visualData: { num1: 51, tens1: 5, ones1: 1, num2: 23, tens2: 2, ones2: 3, sum: 74 }
  },
  {
    id: 40, districtId: 3, category: '2-DIGIT + 2-DIGIT', visual: 'blocks',
    questionText: "What is 34 + 12?",
    options: ['46', '45', '47', '56'],
    correctAnswer: '46',
    explanation: "Tens: 30 + 10 = 40. Ones: 4 + 2 = 6. Total: 46.",
    hint1: "30 + 10 = 40. 4 + 2 = 6.",
    hint2: "40 + 6 = 46.",
    visualData: { num1: 34, tens1: 3, ones1: 4, num2: 12, tens2: 1, ones2: 2, sum: 46 }
  },

  // ── WORLD 4: GARDEN GROVE (Questions 41 - 50: Word Problems - Easy) ──────────
  {
    id: 41, districtId: 4, category: 'WORD PROBLEMS', visual: 'blocks',
    questionText: "Emma picked 12 red flowers and 5 yellow flowers. How many flowers did she pick in total?",
    options: ['17 flowers', '16 flowers', '18 flowers', '27 flowers'],
    correctAnswer: '17 flowers',
    explanation: "12 + 5 = 17 flowers.",
    hint1: "Add 12 and 5.",
    hint2: "2 ones + 5 ones = 7 ones. Total: 17.",
    visualData: { num1: 12, tens1: 1, ones1: 2, num2: 5, tens2: 0, ones2: 5, sum: 17 }
  },
  {
    id: 42, districtId: 4, category: 'WORD PROBLEMS', visual: 'blocks',
    questionText: "Leo has 15 blue marbles. He wins 4 green marbles. How many marbles does he have now?",
    options: ['19 marbles', '18 marbles', '20 marbles', '17 marbles'],
    correctAnswer: '19 marbles',
    explanation: "15 + 4 = 19 marbles.",
    hint1: "Ones: 5 + 4 = 9.",
    hint2: "10 + 9 = 19.",
    visualData: { num1: 15, tens1: 1, ones1: 5, num2: 4, tens2: 0, ones2: 4, sum: 19 }
  },
  {
    id: 43, districtId: 4, category: 'WORD PROBLEMS', visual: 'blocks',
    questionText: "There are 20 apples and 9 oranges in a fruit basket. How many fruits are there altogether?",
    options: ['29 fruits', '28 fruits', '30 fruits', '19 fruits'],
    correctAnswer: '29 fruits',
    explanation: "20 + 9 = 29 fruits.",
    hint1: "20 plus 9 ones.",
    hint2: "20 + 9 = 29.",
    visualData: { num1: 20, tens1: 2, ones1: 0, num2: 9, tens2: 0, ones2: 9, sum: 29 }
  },
  {
    id: 44, districtId: 4, category: 'WORD PROBLEMS', visual: 'blocks',
    questionText: "Maya read 11 story pages on Monday and 7 pages on Tuesday. How many pages did she read?",
    options: ['18 pages', '17 pages', '19 pages', '28 pages'],
    correctAnswer: '18 pages',
    explanation: "11 + 7 = 18 pages.",
    hint1: "Add the ones: 1 + 7 = 8.",
    hint2: "10 + 8 = 18.",
    visualData: { num1: 11, tens1: 1, ones1: 1, num2: 7, tens2: 0, ones2: 7, sum: 18 }
  },
  {
    id: 45, districtId: 4, category: 'WORD PROBLEMS', visual: 'blocks',
    questionText: "A craft box holds 14 red beads and 5 blue beads. How many beads are there in all?",
    options: ['19 beads', '18 beads', '20 beads', '29 beads'],
    correctAnswer: '19 beads',
    explanation: "14 + 5 = 19 beads.",
    hint1: "4 + 5 = 9 ones.",
    hint2: "10 + 9 = 19.",
    visualData: { num1: 14, tens1: 1, ones1: 4, num2: 5, tens2: 0, ones2: 5, sum: 19 }
  },
  {
    id: 46, districtId: 4, category: 'WORD PROBLEMS', visual: 'blocks',
    questionText: "Sam scores 13 points in game one and 4 points in game two. What is his total score?",
    options: ['17 points', '16 points', '18 points', '27 points'],
    correctAnswer: '17 points',
    explanation: "13 + 4 = 17 points.",
    hint1: "3 + 4 = 7 ones.",
    hint2: "10 + 7 = 17.",
    visualData: { num1: 13, tens1: 1, ones1: 3, num2: 4, tens2: 0, ones2: 4, sum: 17 }
  },
  {
    id: 47, districtId: 4, category: 'WORD PROBLEMS', visual: 'blocks',
    questionText: "There are 22 sparrows in the oak tree and 6 sparrows in the pine tree. How many sparrows altogether?",
    options: ['28 sparrows', '27 sparrows', '29 sparrows', '38 sparrows'],
    correctAnswer: '28 sparrows',
    explanation: "22 + 6 = 28 sparrows.",
    hint1: "2 + 6 = 8 ones.",
    hint2: "20 + 8 = 28.",
    visualData: { num1: 22, tens1: 2, ones1: 2, num2: 6, tens2: 0, ones2: 6, sum: 28 }
  },
  {
    id: 48, districtId: 4, category: 'WORD PROBLEMS', visual: 'blocks',
    questionText: "Nina collected 31 star stickers and gets 8 more from her teacher. How many stickers does she have?",
    options: ['39 stickers', '38 stickers', '40 stickers', '29 stickers'],
    correctAnswer: '39 stickers',
    explanation: "31 + 8 = 39 stickers.",
    hint1: "1 + 8 = 9 ones.",
    hint2: "30 + 9 = 39.",
    visualData: { num1: 31, tens1: 3, ones1: 1, num2: 8, tens2: 0, ones2: 8, sum: 39 }
  },
  {
    id: 49, districtId: 4, category: 'WORD PROBLEMS', visual: 'blocks',
    questionText: "A gym bin has 25 red balls and 4 green balls. How many balls are in the bin?",
    options: ['29 balls', '28 balls', '30 balls', '39 balls'],
    correctAnswer: '29 balls',
    explanation: "25 + 4 = 29 balls.",
    hint1: "5 + 4 = 9 ones.",
    hint2: "20 + 9 = 29.",
    visualData: { num1: 25, tens1: 2, ones1: 5, num2: 4, tens2: 0, ones2: 4, sum: 29 }
  },
  {
    id: 50, districtId: 4, category: 'WORD PROBLEMS', visual: 'blocks',
    questionText: "Oliver planted 23 tulip bulbs and 14 daffodil bulbs. How many flower bulbs were planted in total?",
    options: ['37 bulbs', '36 bulbs', '38 bulbs', '47 bulbs'],
    correctAnswer: '37 bulbs',
    explanation: "23 + 14 = 37 bulbs. Tens: 20 + 10 = 30. Ones: 3 + 4 = 7.",
    hint1: "20 + 10 = 30. 3 + 4 = 7.",
    hint2: "30 + 7 = 37.",
    visualData: { num1: 23, tens1: 2, ones1: 3, num2: 14, tens2: 1, ones2: 4, sum: 37 }
  },

  // ── WORLD 5: RIVER RAPIDS (Questions 51 - 60: Larger 2-Digit Sums) ───────────
  {
    id: 51, districtId: 5, category: 'LARGER SUMS', visual: 'blocks',
    questionText: "What is 45 + 23?",
    options: ['68', '67', '69', '78'],
    correctAnswer: '68',
    explanation: "Tens: 40 + 20 = 60. Ones: 5 + 3 = 8. Total: 68.",
    hint1: "4 tens + 2 tens = 6 tens. 5 ones + 3 ones = 8 ones.",
    hint2: "60 + 8 = 68.",
    visualData: { num1: 45, tens1: 4, ones1: 5, num2: 23, tens2: 2, ones2: 3, sum: 68 }
  },
  {
    id: 52, districtId: 5, category: 'LARGER SUMS', visual: 'blocks',
    questionText: "What is 53 + 24?",
    options: ['77', '76', '78', '87'],
    correctAnswer: '77',
    explanation: "Tens: 50 + 20 = 70. Ones: 3 + 4 = 7. Total: 77.",
    hint1: "50 + 20 = 70. 3 + 4 = 7.",
    hint2: "70 + 7 = 77.",
    visualData: { num1: 53, tens1: 5, ones1: 3, num2: 24, tens2: 2, ones2: 4, sum: 77 }
  },
  {
    id: 53, districtId: 5, category: 'LARGER SUMS', visual: 'blocks',
    questionText: "What is 62 + 25?",
    options: ['87', '86', '88', '77'],
    correctAnswer: '87',
    explanation: "Tens: 60 + 20 = 80. Ones: 2 + 5 = 7. Total: 87.",
    hint1: "60 + 20 = 80. 2 + 5 = 7.",
    hint2: "80 + 7 = 87.",
    visualData: { num1: 62, tens1: 6, ones1: 2, num2: 25, tens2: 2, ones2: 5, sum: 87 }
  },
  {
    id: 54, districtId: 5, category: 'LARGER SUMS', visual: 'blocks',
    questionText: "What is 41 + 36?",
    options: ['77', '76', '78', '87'],
    correctAnswer: '77',
    explanation: "Tens: 40 + 30 = 70. Ones: 1 + 6 = 7. Total: 77.",
    hint1: "40 + 30 = 70. 1 + 6 = 7.",
    hint2: "70 + 7 = 77.",
    visualData: { num1: 41, tens1: 4, ones1: 1, num2: 36, tens2: 3, ones2: 6, sum: 77 }
  },
  {
    id: 55, districtId: 5, category: 'LARGER SUMS', visual: 'blocks',
    questionText: "What is 54 + 33?",
    options: ['87', '86', '88', '77'],
    correctAnswer: '87',
    explanation: "Tens: 50 + 30 = 80. Ones: 4 + 3 = 7. Total: 87.",
    hint1: "50 + 30 = 80. 4 + 3 = 7.",
    hint2: "80 + 7 = 87.",
    visualData: { num1: 54, tens1: 5, ones1: 4, num2: 33, tens2: 3, ones2: 3, sum: 87 }
  },
  {
    id: 56, districtId: 5, category: 'LARGER SUMS', visual: 'blocks',
    questionText: "What is 61 + 28?",
    options: ['89', '88', '90', '79'],
    correctAnswer: '89',
    explanation: "Tens: 60 + 20 = 80. Ones: 1 + 8 = 9. Total: 89.",
    hint1: "60 + 20 = 80. 1 + 8 = 9.",
    hint2: "80 + 9 = 89.",
    visualData: { num1: 61, tens1: 6, ones1: 1, num2: 28, tens2: 2, ones2: 8, sum: 89 }
  },
  {
    id: 57, districtId: 5, category: 'LARGER SUMS', visual: 'blocks',
    questionText: "What is 70 + 14?",
    options: ['84', '83', '85', '74'],
    correctAnswer: '84',
    explanation: "Tens: 70 + 10 = 80. Ones: 0 + 4 = 4. Total: 84.",
    hint1: "70 + 10 = 80. 0 + 4 = 4.",
    hint2: "80 + 4 = 84.",
    visualData: { num1: 70, tens1: 7, ones1: 0, num2: 14, tens2: 1, ones2: 4, sum: 84 }
  },
  {
    id: 58, districtId: 5, category: 'LARGER SUMS', visual: 'blocks',
    questionText: "What is 52 + 36?",
    options: ['88', '87', '89', '78'],
    correctAnswer: '88',
    explanation: "Tens: 50 + 30 = 80. Ones: 2 + 6 = 8. Total: 88.",
    hint1: "50 + 30 = 80. 2 + 6 = 8.",
    hint2: "80 + 8 = 88.",
    visualData: { num1: 52, tens1: 5, ones1: 2, num2: 36, tens2: 3, ones2: 6, sum: 88 }
  },
  {
    id: 59, districtId: 5, category: 'LARGER SUMS', visual: 'blocks',
    questionText: "What is 43 + 45?",
    options: ['88', '87', '89', '98'],
    correctAnswer: '88',
    explanation: "Tens: 40 + 40 = 80. Ones: 3 + 5 = 8. Total: 88.",
    hint1: "40 + 40 = 80. 3 + 5 = 8.",
    hint2: "80 + 8 = 88.",
    visualData: { num1: 43, tens1: 4, ones1: 3, num2: 45, tens2: 4, ones2: 5, sum: 88 }
  },
  {
    id: 60, districtId: 5, category: 'LARGER SUMS', visual: 'blocks',
    questionText: "What is 35 + 54?",
    options: ['89', '88', '90', '79'],
    correctAnswer: '89',
    explanation: "Tens: 30 + 50 = 80. Ones: 5 + 4 = 9. Total: 89.",
    hint1: "30 + 50 = 80. 5 + 4 = 9.",
    hint2: "80 + 9 = 89.",
    visualData: { num1: 35, tens1: 3, ones1: 5, num2: 54, tens2: 5, ones2: 4, sum: 89 }
  },

  // ── WORLD 6: BAKERY EXPRESS (Questions 61 - 70: Contextual Word Problems) ────
  {
    id: 61, districtId: 6, category: 'WORD PROBLEMS', visual: 'blocks',
    questionText: "A bakery made 24 blueberry muffins and 13 chocolate cupcakes. How many treats are there in all?",
    options: ['37 treats', '36 treats', '38 treats', '47 treats'],
    correctAnswer: '37 treats',
    explanation: "24 + 13 = 37 treats. Tens: 20 + 10 = 30. Ones: 4 + 3 = 7.",
    hint1: "20 + 10 = 30. 4 + 3 = 7.",
    hint2: "30 + 7 = 37.",
    visualData: { num1: 24, tens1: 2, ones1: 4, num2: 13, tens2: 1, ones2: 3, sum: 37 }
  },
  {
    id: 62, districtId: 6, category: 'WORD PROBLEMS', visual: 'blocks',
    questionText: "Class 2A has 32 students and Class 2B has 25 students. How many students are there altogether?",
    options: ['57 students', '56 students', '58 students', '67 students'],
    correctAnswer: '57 students',
    explanation: "32 + 25 = 57 students. Tens: 30 + 20 = 50. Ones: 2 + 5 = 7.",
    hint1: "30 + 20 = 50. 2 + 5 = 7.",
    hint2: "50 + 7 = 57.",
    visualData: { num1: 32, tens1: 3, ones1: 2, num2: 25, tens2: 2, ones2: 5, sum: 57 }
  },
  {
    id: 63, districtId: 6, category: 'WORD PROBLEMS', visual: 'blocks',
    questionText: "A toy store sold 53 cars on Saturday and 24 cars on Sunday. How many cars did they sell in total?",
    options: ['77 cars', '76 cars', '78 cars', '87 cars'],
    correctAnswer: '77 cars',
    explanation: "53 + 24 = 77 cars. Tens: 50 + 20 = 70. Ones: 3 + 4 = 7.",
    hint1: "50 + 20 = 70. 3 + 4 = 7.",
    hint2: "70 + 7 = 77.",
    visualData: { num1: 53, tens1: 5, ones1: 3, num2: 24, tens2: 2, ones2: 4, sum: 77 }
  },
  {
    id: 64, districtId: 6, category: 'WORD PROBLEMS', visual: 'blocks',
    questionText: "Ana picked 22 juicy strawberries and 31 sweet blueberries. How many berries in total?",
    options: ['53 berries', '52 berries', '54 berries', '63 berries'],
    correctAnswer: '53 berries',
    explanation: "22 + 31 = 53 berries. Tens: 20 + 30 = 50. Ones: 2 + 1 = 3.",
    hint1: "20 + 30 = 50. 2 + 1 = 3.",
    hint2: "50 + 3 = 53.",
    visualData: { num1: 22, tens1: 2, ones1: 2, num2: 31, tens2: 3, ones2: 1, sum: 53 }
  },
  {
    id: 65, districtId: 6, category: 'WORD PROBLEMS', visual: 'blocks',
    questionText: "The library has 61 adventure books and 27 science books on the shelf. How many books in all?",
    options: ['88 books', '87 books', '89 books', '78 books'],
    correctAnswer: '88 books',
    explanation: "61 + 27 = 88 books. Tens: 60 + 20 = 80. Ones: 1 + 7 = 8.",
    hint1: "60 + 20 = 80. 1 + 7 = 8.",
    hint2: "80 + 8 = 88.",
    visualData: { num1: 61, tens1: 6, ones1: 1, num2: 27, tens2: 2, ones2: 7, sum: 88 }
  },
  {
    id: 66, districtId: 6, category: 'WORD PROBLEMS', visual: 'blocks',
    questionText: "Ben ran 45 meters in the morning and 34 meters in the afternoon. How many meters did he run?",
    options: ['79 meters', '78 meters', '80 meters', '89 meters'],
    correctAnswer: '79 meters',
    explanation: "45 + 34 = 79 meters. Tens: 40 + 30 = 70. Ones: 5 + 4 = 9.",
    hint1: "40 + 30 = 70. 5 + 4 = 9.",
    hint2: "70 + 9 = 79.",
    visualData: { num1: 45, tens1: 4, ones1: 5, num2: 34, tens2: 3, ones2: 4, sum: 79 }
  },
  {
    id: 67, districtId: 6, category: 'WORD PROBLEMS', visual: 'blocks',
    questionText: "A farm has 50 chickens and 39 ducks roaming the pasture. How many birds are there altogether?",
    options: ['89 birds', '88 birds', '90 birds', '79 birds'],
    correctAnswer: '89 birds',
    explanation: "50 + 39 = 89 birds. Tens: 50 + 30 = 80. Ones: 0 + 9 = 9.",
    hint1: "50 + 30 = 80. 0 + 9 = 9.",
    hint2: "80 + 9 = 89.",
    visualData: { num1: 50, tens1: 5, ones1: 0, num2: 39, tens2: 3, ones2: 9, sum: 89 }
  },
  {
    id: 68, districtId: 6, category: 'WORD PROBLEMS', visual: 'blocks',
    questionText: "Maya collected 64 animal stamps. She receives 25 more stamps from her aunt. How many stamps total?",
    options: ['89 stamps', '88 stamps', '90 stamps', '79 stamps'],
    correctAnswer: '89 stamps',
    explanation: "64 + 25 = 89 stamps. Tens: 60 + 20 = 80. Ones: 4 + 5 = 9.",
    hint1: "60 + 20 = 80. 4 + 5 = 9.",
    hint2: "80 + 9 = 89.",
    visualData: { num1: 64, tens1: 6, ones1: 4, num2: 25, tens2: 2, ones2: 5, sum: 89 }
  },
  {
    id: 69, districtId: 6, category: 'WORD PROBLEMS', visual: 'blocks',
    questionText: "A pencil factory pack contains 71 graphite pencils and 18 colored pens. How many items altogether?",
    options: ['89 items', '88 items', '90 items', '79 items'],
    correctAnswer: '89 items',
    explanation: "71 + 18 = 89 items. Tens: 70 + 10 = 80. Ones: 1 + 8 = 9.",
    hint1: "70 + 10 = 80. 1 + 8 = 9.",
    hint2: "80 + 9 = 89.",
    visualData: { num1: 71, tens1: 7, ones1: 1, num2: 18, tens2: 1, ones2: 8, sum: 89 }
  },
  {
    id: 70, districtId: 6, category: 'WORD PROBLEMS', visual: 'blocks',
    questionText: "The school cafeteria served 42 apple juices and 36 orange juices. How many juice boxes were served?",
    options: ['78 juices', '77 juices', '79 juices', '88 juices'],
    correctAnswer: '78 juices',
    explanation: "42 + 36 = 78 juices. Tens: 40 + 30 = 70. Ones: 2 + 6 = 8.",
    hint1: "40 + 30 = 70. 2 + 6 = 8.",
    hint2: "70 + 8 = 78.",
    visualData: { num1: 42, tens1: 4, ones1: 2, num2: 36, tens2: 3, ones2: 6, sum: 78 }
  },

  // ── WORLD 7: CLOUD CASTLE (Questions 71 - 80: Mixed 2-Digit Challenges) ──────
  {
    id: 71, districtId: 7, category: 'MIXED 2-DIGIT', visual: 'blocks',
    questionText: "What is 10 + 45?",
    options: ['55', '54', '56', '65'],
    correctAnswer: '55',
    explanation: "Tens: 10 + 40 = 50. Ones: 0 + 5 = 5. Total: 55.",
    hint1: "10 + 40 = 50. 0 + 5 = 5.",
    hint2: "50 + 5 = 55.",
    visualData: { num1: 10, tens1: 1, ones1: 0, num2: 45, tens2: 4, ones2: 5, sum: 55 }
  },
  {
    id: 72, districtId: 7, category: 'MIXED 2-DIGIT', visual: 'blocks',
    questionText: "What is 26 + 40?",
    options: ['66', '65', '67', '76'],
    correctAnswer: '66',
    explanation: "Tens: 20 + 40 = 60. Ones: 6 + 0 = 6. Total: 66.",
    hint1: "20 + 40 = 60. 6 + 0 = 6.",
    hint2: "60 + 6 = 66.",
    visualData: { num1: 26, tens1: 2, ones1: 6, num2: 40, tens2: 4, ones2: 0, sum: 66 }
  },
  {
    id: 73, districtId: 7, category: 'MIXED 2-DIGIT', visual: 'blocks',
    questionText: "What is 33 + 55?",
    options: ['88', '87', '89', '78'],
    correctAnswer: '88',
    explanation: "Tens: 30 + 50 = 80. Ones: 3 + 5 = 8. Total: 88.",
    hint1: "30 + 50 = 80. 3 + 5 = 8.",
    hint2: "80 + 8 = 88.",
    visualData: { num1: 33, tens1: 3, ones1: 3, num2: 55, tens2: 5, ones2: 5, sum: 88 }
  },
  {
    id: 74, districtId: 7, category: 'MIXED 2-DIGIT', visual: 'blocks',
    questionText: "What is 47 + 21?",
    options: ['68', '67', '69', '78'],
    correctAnswer: '68',
    explanation: "Tens: 40 + 20 = 60. Ones: 7 + 1 = 8. Total: 68.",
    hint1: "40 + 20 = 60. 7 + 1 = 8.",
    hint2: "60 + 8 = 68.",
    visualData: { num1: 47, tens1: 4, ones1: 7, num2: 21, tens2: 2, ones2: 1, sum: 68 }
  },
  {
    id: 75, districtId: 7, category: 'MIXED 2-DIGIT', visual: 'blocks',
    questionText: "What is 55 + 13?",
    options: ['68', '67', '69', '78'],
    correctAnswer: '68',
    explanation: "Tens: 50 + 10 = 60. Ones: 5 + 3 = 8. Total: 68.",
    hint1: "50 + 10 = 60. 5 + 3 = 8.",
    hint2: "60 + 8 = 68.",
    visualData: { num1: 55, tens1: 5, ones1: 5, num2: 13, tens2: 1, ones2: 3, sum: 68 }
  },
  {
    id: 76, districtId: 7, category: 'MIXED 2-DIGIT', visual: 'blocks',
    questionText: "What is 61 + 16?",
    options: ['77', '76', '78', '87'],
    correctAnswer: '77',
    explanation: "Tens: 60 + 10 = 70. Ones: 1 + 6 = 7. Total: 77.",
    hint1: "60 + 10 = 70. 1 + 6 = 7.",
    hint2: "70 + 7 = 77.",
    visualData: { num1: 61, tens1: 6, ones1: 1, num2: 16, tens2: 1, ones2: 6, sum: 77 }
  },
  {
    id: 77, districtId: 7, category: 'MIXED 2-DIGIT', visual: 'blocks',
    questionText: "What is 72 + 14?",
    options: ['86', '85', '87', '96'],
    correctAnswer: '86',
    explanation: "Tens: 70 + 10 = 80. Ones: 2 + 4 = 6. Total: 86.",
    hint1: "70 + 10 = 80. 2 + 4 = 6.",
    hint2: "80 + 6 = 86.",
    visualData: { num1: 72, tens1: 7, ones1: 2, num2: 14, tens2: 1, ones2: 4, sum: 86 }
  },
  {
    id: 78, districtId: 7, category: 'MIXED 2-DIGIT', visual: 'blocks',
    questionText: "What is 80 + 7?",
    options: ['87', '86', '88', '78'],
    correctAnswer: '87',
    explanation: "Tens: 80. Ones: 0 + 7 = 7. Total: 87.",
    hint1: "80 + 7 = 87.",
    hint2: "8 tens and 7 ones is 87.",
    visualData: { num1: 80, tens1: 8, ones1: 0, num2: 7, tens2: 0, ones2: 7, sum: 87 }
  },
  {
    id: 79, districtId: 7, category: 'MIXED 2-DIGIT', visual: 'blocks',
    questionText: "What is 36 + 42?",
    options: ['78', '77', '79', '88'],
    correctAnswer: '78',
    explanation: "Tens: 30 + 40 = 70. Ones: 6 + 2 = 8. Total: 78.",
    hint1: "30 + 40 = 70. 6 + 2 = 8.",
    hint2: "70 + 8 = 78.",
    visualData: { num1: 36, tens1: 3, ones1: 6, num2: 42, tens2: 4, ones2: 2, sum: 78 }
  },
  {
    id: 80, districtId: 7, category: 'MIXED 2-DIGIT', visual: 'blocks',
    questionText: "What is 63 + 25?",
    options: ['88', '87', '89', '78'],
    correctAnswer: '88',
    explanation: "Tens: 60 + 20 = 80. Ones: 3 + 5 = 8. Total: 88.",
    hint1: "60 + 20 = 80. 3 + 5 = 8.",
    hint2: "80 + 8 = 88.",
    visualData: { num1: 63, tens1: 6, ones1: 3, num2: 25, tens2: 2, ones2: 5, sum: 88 }
  },

  // ── WORLD 8: DRAGON DEN (Questions 81 - 90: Quest Word Problems) ─────────────
  {
    id: 81, districtId: 8, category: 'QUEST PROBLEMS', visual: 'blocks',
    questionText: "A friendly dragon hoards 34 gold coins and discovers 52 more in a chest. How many coins in total?",
    options: ['86 coins', '85 coins', '87 coins', '76 coins'],
    correctAnswer: '86 coins',
    explanation: "34 + 52 = 86 coins. Tens: 30 + 50 = 80. Ones: 4 + 2 = 6.",
    hint1: "30 + 50 = 80. 4 + 2 = 6.",
    hint2: "80 + 6 = 86.",
    visualData: { num1: 34, tens1: 3, ones1: 4, num2: 52, tens2: 5, ones2: 2, sum: 86 }
  },
  {
    id: 82, districtId: 8, category: 'QUEST PROBLEMS', visual: 'blocks',
    questionText: "Two dragon nests have 41 shiny eggs and 38 crystal eggs. How many eggs altogether?",
    options: ['79 eggs', '78 eggs', '80 eggs', '89 eggs'],
    correctAnswer: '79 eggs',
    explanation: "41 + 38 = 79 eggs. Tens: 40 + 30 = 70. Ones: 1 + 8 = 9.",
    hint1: "40 + 30 = 70. 1 + 8 = 9.",
    hint2: "70 + 9 = 79.",
    visualData: { num1: 41, tens1: 4, ones1: 1, num2: 38, tens2: 3, ones2: 8, sum: 79 }
  },
  {
    id: 83, districtId: 8, category: 'QUEST PROBLEMS', visual: 'blocks',
    questionText: "A potion master has 45 red health potions and 43 blue magic potions. How many potions in all?",
    options: ['88 potions', '87 potions', '89 potions', '98 potions'],
    correctAnswer: '88 potions',
    explanation: "45 + 43 = 88 potions. Tens: 40 + 40 = 80. Ones: 5 + 3 = 8.",
    hint1: "40 + 40 = 80. 5 + 3 = 8.",
    hint2: "80 + 8 = 88.",
    visualData: { num1: 45, tens1: 4, ones1: 5, num2: 43, tens2: 4, ones2: 3, sum: 88 }
  },
  {
    id: 84, districtId: 8, category: 'QUEST PROBLEMS', visual: 'blocks',
    questionText: "Leo walked 52 steps north and 36 steps east on his treasure map. How many steps did he take in total?",
    options: ['88 steps', '87 steps', '89 steps', '78 steps'],
    correctAnswer: '88 steps',
    explanation: "52 + 36 = 88 steps. Tens: 50 + 30 = 80. Ones: 2 + 6 = 8.",
    hint1: "50 + 30 = 80. 2 + 6 = 8.",
    hint2: "80 + 8 = 88.",
    visualData: { num1: 52, tens1: 5, ones1: 2, num2: 36, tens2: 3, ones2: 6, sum: 88 }
  },
  {
    id: 85, districtId: 8, category: 'QUEST PROBLEMS', visual: 'blocks',
    questionText: "The castle tower has 61 arched windows and 25 wooden doors. How many openings are there in all?",
    options: ['86 openings', '85 openings', '87 openings', '76 openings'],
    correctAnswer: '86 openings',
    explanation: "61 + 25 = 86 openings. Tens: 60 + 20 = 80. Ones: 1 + 5 = 6.",
    hint1: "60 + 20 = 80. 1 + 5 = 6.",
    hint2: "80 + 6 = 86.",
    visualData: { num1: 61, tens1: 6, ones1: 1, num2: 25, tens2: 2, ones2: 5, sum: 86 }
  },
  {
    id: 86, districtId: 8, category: 'QUEST PROBLEMS', visual: 'blocks',
    questionText: "A knight finds 30 silver keys in one dungeon and 57 bronze keys in another. How many keys in total?",
    options: ['87 keys', '86 keys', '88 keys', '77 keys'],
    correctAnswer: '87 keys',
    explanation: "30 + 57 = 87 keys. Tens: 30 + 50 = 80. Ones: 0 + 7 = 7.",
    hint1: "30 + 50 = 80. 0 + 7 = 7.",
    hint2: "80 + 7 = 87.",
    visualData: { num1: 30, tens1: 3, ones1: 0, num2: 57, tens2: 5, ones2: 7, sum: 87 }
  },
  {
    id: 87, districtId: 8, category: 'QUEST PROBLEMS', visual: 'blocks',
    questionText: "An enchanted forest has 43 tall cedar trees and 44 oak trees. How many trees altogether?",
    options: ['87 trees', '86 trees', '88 trees', '97 trees'],
    correctAnswer: '87 trees',
    explanation: "43 + 44 = 87 trees. Tens: 40 + 40 = 80. Ones: 3 + 4 = 7.",
    hint1: "40 + 40 = 80. 3 + 4 = 7.",
    hint2: "80 + 7 = 87.",
    visualData: { num1: 43, tens1: 4, ones1: 3, num2: 44, tens2: 4, ones2: 4, sum: 87 }
  },
  {
    id: 88, districtId: 8, category: 'QUEST PROBLEMS', visual: 'blocks',
    questionText: "Maya collected 55 glowing runes and found 34 more in the dragon temple. How many runes were found?",
    options: ['89 runes', '88 runes', '90 runes', '79 runes'],
    correctAnswer: '89 runes',
    explanation: "55 + 34 = 89 runes. Tens: 50 + 30 = 80. Ones: 5 + 4 = 9.",
    hint1: "50 + 30 = 80. 5 + 4 = 9.",
    hint2: "80 + 9 = 89.",
    visualData: { num1: 55, tens1: 5, ones1: 5, num2: 34, tens2: 3, ones2: 4, sum: 89 }
  },
  {
    id: 89, districtId: 8, category: 'QUEST PROBLEMS', visual: 'blocks',
    questionText: "A merchant ship unloads 62 spice barrels and 26 fruit crates. How many cargo items were unloaded?",
    options: ['88 items', '87 items', '89 items', '78 items'],
    correctAnswer: '88 items',
    explanation: "62 + 26 = 88 items. Tens: 60 + 20 = 80. Ones: 2 + 6 = 8.",
    hint1: "60 + 20 = 80. 2 + 6 = 8.",
    hint2: "80 + 8 = 88.",
    visualData: { num1: 62, tens1: 6, ones1: 2, num2: 26, tens2: 2, ones2: 6, sum: 88 }
  },
  {
    id: 90, districtId: 8, category: 'QUEST PROBLEMS', visual: 'blocks',
    questionText: "A hero claims 71 gold stars and 18 platinum stars on the scoreboard. How many stars in all?",
    options: ['89 stars', '88 stars', '90 stars', '79 stars'],
    correctAnswer: '89 stars',
    explanation: "71 + 18 = 89 stars. Tens: 70 + 10 = 80. Ones: 1 + 8 = 9.",
    hint1: "70 + 10 = 80. 1 + 8 = 9.",
    hint2: "80 + 9 = 89.",
    visualData: { num1: 71, tens1: 7, ones1: 1, num2: 18, tens2: 1, ones2: 8, sum: 89 }
  },

  // ── WORLD 9: CHAMPION PEAK (Questions 91 - 100: Grand Master Challenges) ─────
  {
    id: 91, districtId: 9, category: 'GRAND MASTER', visual: 'blocks',
    questionText: "What is 45 + 44?",
    options: ['89', '88', '90', '79'],
    correctAnswer: '89',
    explanation: "Tens: 40 + 40 = 80. Ones: 5 + 4 = 9. Total: 89.",
    hint1: "40 + 40 = 80. 5 + 4 = 9.",
    hint2: "80 + 9 = 89.",
    visualData: { num1: 45, tens1: 4, ones1: 5, num2: 44, tens2: 4, ones2: 4, sum: 89 }
  },
  {
    id: 92, districtId: 9, category: 'GRAND MASTER', visual: 'blocks',
    questionText: "A pet sanctuary cares for 36 colorful tropical fish and 53 songbirds. How many animals in total?",
    options: ['89 animals', '88 animals', '90 animals', '79 animals'],
    correctAnswer: '89 animals',
    explanation: "36 + 53 = 89 animals. Tens: 30 + 50 = 80. Ones: 6 + 3 = 9.",
    hint1: "30 + 50 = 80. 6 + 3 = 9.",
    hint2: "80 + 9 = 89.",
    visualData: { num1: 36, tens1: 3, ones1: 6, num2: 53, tens2: 5, ones2: 3, sum: 89 }
  },
  {
    id: 93, districtId: 9, category: 'GRAND MASTER', visual: 'blocks',
    questionText: "What is 27 + 32?",
    options: ['59', '58', '60', '49'],
    correctAnswer: '59',
    explanation: "Tens: 20 + 30 = 50. Ones: 7 + 2 = 9. Total: 59.",
    hint1: "20 + 30 = 50. 7 + 2 = 9.",
    hint2: "50 + 9 = 59.",
    visualData: { num1: 27, tens1: 2, ones1: 7, num2: 32, tens2: 3, ones2: 2, sum: 59 }
  },
  {
    id: 94, districtId: 9, category: 'GRAND MASTER', visual: 'blocks',
    questionText: "A community race had 54 runners on Saturday and 35 runners on Sunday. How many ran in total?",
    options: ['89 runners', '88 runners', '90 runners', '79 runners'],
    correctAnswer: '89 runners',
    explanation: "54 + 35 = 89 runners. Tens: 50 + 30 = 80. Ones: 4 + 5 = 9.",
    hint1: "50 + 30 = 80. 4 + 5 = 9.",
    hint2: "80 + 9 = 89.",
    visualData: { num1: 54, tens1: 5, ones1: 4, num2: 35, tens2: 3, ones2: 5, sum: 89 }
  },
  {
    id: 95, districtId: 9, category: 'GRAND MASTER', visual: 'blocks',
    questionText: "What is 63 + 24?",
    options: ['87', '86', '88', '77'],
    correctAnswer: '87',
    explanation: "Tens: 60 + 20 = 80. Ones: 3 + 4 = 7. Total: 87.",
    hint1: "60 + 20 = 80. 3 + 4 = 7.",
    hint2: "80 + 7 = 87.",
    visualData: { num1: 63, tens1: 6, ones1: 3, num2: 24, tens2: 2, ones2: 4, sum: 87 }
  },
  {
    id: 96, districtId: 9, category: 'GRAND MASTER', visual: 'blocks',
    questionText: "There are 72 students in Gym A and 17 students in Gym B. How many students are there in total?",
    options: ['89 students', '88 students', '90 students', '79 students'],
    correctAnswer: '89 students',
    explanation: "72 + 17 = 89 students. Tens: 70 + 10 = 80. Ones: 2 + 7 = 9.",
    hint1: "70 + 10 = 80. 2 + 7 = 9.",
    hint2: "80 + 9 = 89.",
    visualData: { num1: 72, tens1: 7, ones1: 2, num2: 17, tens2: 1, ones2: 7, sum: 89 }
  },
  {
    id: 97, districtId: 9, category: 'GRAND MASTER', visual: 'blocks',
    questionText: "What is 81 + 8?",
    options: ['89', '88', '90', '79'],
    correctAnswer: '89',
    explanation: "Tens: 80. Ones: 1 + 8 = 9. Total: 89.",
    hint1: "80 + 0 = 80. 1 + 8 = 9.",
    hint2: "80 + 9 = 89.",
    visualData: { num1: 81, tens1: 8, ones1: 1, num2: 8, tens2: 0, ones2: 8, sum: 89 }
  },
  {
    id: 98, districtId: 9, category: 'GRAND MASTER', visual: 'blocks',
    questionText: "A sunny garden has 56 blooming rose bushes and 33 sunflowers. How many flowers in all?",
    options: ['89 flowers', '88 flowers', '90 flowers', '79 flowers'],
    correctAnswer: '89 flowers',
    explanation: "56 + 33 = 89 flowers. Tens: 50 + 30 = 80. Ones: 6 + 3 = 9.",
    hint1: "50 + 30 = 80. 6 + 3 = 9.",
    hint2: "80 + 9 = 89.",
    visualData: { num1: 56, tens1: 5, ones1: 6, num2: 33, tens2: 3, ones2: 3, sum: 89 }
  },
  {
    id: 99, districtId: 9, category: 'GRAND MASTER', visual: 'blocks',
    questionText: "What is 44 + 45?",
    options: ['89', '88', '90', '79'],
    correctAnswer: '89',
    explanation: "Tens: 40 + 40 = 80. Ones: 4 + 5 = 9. Total: 89.",
    hint1: "40 + 40 = 80. 4 + 5 = 9.",
    hint2: "80 + 9 = 89.",
    visualData: { num1: 44, tens1: 4, ones1: 4, num2: 45, tens2: 4, ones2: 5, sum: 89 }
  },
  {
    id: 100, districtId: 9, category: 'GRAND MASTER', visual: 'blocks',
    questionText: "Leo collected 60 smooth sea pebbles and Maya collected 29 sparkling gems. How many in all?",
    options: ['89 treasures', '88 treasures', '90 treasures', '79 treasures'],
    correctAnswer: '89 treasures',
    explanation: "60 + 29 = 89 treasures. Tens: 60 + 20 = 80. Ones: 0 + 9 = 9.",
    hint1: "60 + 20 = 80. 0 + 9 = 9.",
    hint2: "80 + 9 = 89.",
    visualData: { num1: 60, tens1: 6, ones1: 0, num2: 29, tens2: 2, ones2: 9, sum: 89 }
  },
];

export const questionBank = RAW_QUESTIONS;
export default RAW_QUESTIONS;
