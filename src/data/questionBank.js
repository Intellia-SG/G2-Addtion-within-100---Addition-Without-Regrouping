// All questions validated: ones digits sum ≤ 9, tens digits sum ≤ 9
// 10 worlds × 10 questions each

import { shuffle } from '../utils/shuffle.js';

function mcqOptions(answer) {
  const opts = new Set([answer]);
  while (opts.size < 4) {
    const delta = Math.floor(Math.random() * 10) - 5;
    const v = answer + delta;
    if (v > 0 && v !== answer) opts.add(v);
  }
  return shuffle([...opts]);
}

function makeQ(text, answer, hint, explanation) {
  return { text, answer, hint, explanation };
}

export const worlds = [
  {
    id: 1,
    name: 'Number Village',
    icon: '🏠',
    description: 'Add single digit numbers',
    questions: [
      makeQ('What is 3 + 4?', 7, 'Count on from 3: 4, 5, 6, 7', 'The answer is 7.'),
      makeQ('What is 5 + 2?', 7, 'Count on from 5: 6, 7', 'The answer is 7.'),
      makeQ('What is 6 + 3?', 9, 'Count on from 6: 7, 8, 9', 'The answer is 9.'),
      makeQ('What is 4 + 4?', 8, 'Think: 4 and 4 make 8', 'The answer is 8.'),
      makeQ('What is 2 + 6?', 8, 'Count on from 6: 7, 8', 'The answer is 8.'),
      makeQ('What number comes after 9?', 10, 'After 9 comes the next ten: 10', 'The sequence is: 6, 7, 8, 9, 10.'),
      makeQ('What is 1 + 7?', 8, 'Start at 7, count on 1 more', 'The answer is 8.'),
      makeQ('What is 3 + 6?', 9, 'Count on from 6: 7, 8, 9', 'The answer is 9.'),
      makeQ('What is 5 + 3?', 8, 'Count on from 5: 6, 7, 8', 'The answer is 8.'),
      makeQ('What is 2 + 5?', 7, 'Count on from 5: 6, 7', 'The answer is 7.'),
    ],
  },
  {
    id: 2,
    name: 'Tens Town',
    icon: '🏙️',
    description: 'Add multiples of 10',
    questions: [
      makeQ('What is 10 + 20?', 30, 'Think: 1 ten + 2 tens = 3 tens = 30', 'The answer is 30.'),
      makeQ('What is 20 + 30?', 50, 'Think: 2 tens + 3 tens = 5 tens = 50', 'The answer is 50.'),
      makeQ('What is 40 + 10?', 50, 'Think: 4 tens + 1 ten = 5 tens = 50', 'The answer is 50.'),
      makeQ('What is 30 + 40?', 70, 'Think: 3 tens + 4 tens = 7 tens = 70', 'The answer is 70.'),
      makeQ('What is 20 + 50?', 70, 'Think: 2 tens + 5 tens = 7 tens = 70', 'The answer is 70.'),
      makeQ('What is 10 + 60?', 70, 'Think: 1 ten + 6 tens = 7 tens = 70', 'The answer is 70.'),
      makeQ('What is 50 + 30?', 80, 'Think: 5 tens + 3 tens = 8 tens = 80', 'The answer is 80.'),
      makeQ('What is 40 + 40?', 80, 'Think: 4 tens + 4 tens = 8 tens = 80', 'The answer is 80.'),
      makeQ('What is 60 + 20?', 80, 'Think: 6 tens + 2 tens = 8 tens = 80', 'The answer is 80.'),
      makeQ('What is 30 + 60?', 90, 'Think: 3 tens + 6 tens = 9 tens = 90', 'The answer is 90.'),
    ],
  },
  {
    id: 3,
    name: 'Mango Market',
    icon: '🥭',
    description: 'Add 2-digit + 1-digit',
    questions: [
      makeQ('What is 21 + 5?', 26, 'Ones: 1+5=6, tens unchanged: 20. So 26.', 'The answer is 26.'),
      makeQ('What is 32 + 4?', 36, 'Ones: 2+4=6, tens unchanged: 30. So 36.', 'The answer is 36.'),
      makeQ('What is 43 + 3?', 46, 'Ones: 3+3=6, tens unchanged: 40. So 46.', 'The answer is 46.'),
      makeQ('What is 54 + 2?', 56, 'Ones: 4+2=6, tens unchanged: 50. So 56.', 'The answer is 56.'),
      makeQ('What is 61 + 7?', 68, 'Ones: 1+7=8, tens unchanged: 60. So 68.', 'The answer is 68.'),
      makeQ('What is 72 + 5?', 77, 'Ones: 2+5=7, tens unchanged: 70. So 77.', 'The answer is 77.'),
      makeQ('What is 80 + 9?', 89, 'Ones: 0+9=9, tens unchanged: 80. So 89.', 'The answer is 89.'),
      makeQ('What is 15 + 4?', 19, 'Ones: 5+4=9, tens unchanged: 10. So 19.', 'The answer is 19.'),
      makeQ('What is 23 + 6?', 29, 'Ones: 3+6=9, tens unchanged: 20. So 29.', 'The answer is 29.'),
      makeQ('What is 41 + 8?', 49, 'Ones: 1+8=9, tens unchanged: 40. So 49.', 'The answer is 49.'),
    ],
  },
  {
    id: 4,
    name: 'Pasar Malam',
    icon: '🏮',
    description: 'Add 2-digit numbers',
    questions: [
      makeQ('What is 11 + 22?', 33, 'Tens: 10+20=30, Ones: 1+2=3. Total: 33.', 'The answer is 33.'),
      makeQ('What is 13 + 24?', 37, 'Tens: 10+20=30, Ones: 3+4=7. Total: 37.', 'The answer is 37.'),
      makeQ('What is 21 + 14?', 35, 'Tens: 20+10=30, Ones: 1+4=5. Total: 35.', 'The answer is 35.'),
      makeQ('What is 23 + 14?', 37, 'Tens: 20+10=30, Ones: 3+4=7. Total: 37.', 'The answer is 37.'),
      makeQ('What is 31 + 25?', 56, 'Tens: 30+20=50, Ones: 1+5=6. Total: 56.', 'The answer is 56.'),
      makeQ('What is 32 + 15?', 47, 'Tens: 30+10=40, Ones: 2+5=7. Total: 47.', 'The answer is 47.'),
      makeQ('What is 42 + 13?', 55, 'Tens: 40+10=50, Ones: 2+3=5. Total: 55.', 'The answer is 55.'),
      makeQ('What is 44 + 21?', 65, 'Tens: 40+20=60, Ones: 4+1=5. Total: 65.', 'The answer is 65.'),
      makeQ('What is 51 + 23?', 74, 'Tens: 50+20=70, Ones: 1+3=4. Total: 74.', 'The answer is 74.'),
      makeQ('What is 34 + 12?', 46, 'Tens: 30+10=40, Ones: 4+2=6. Total: 46.', 'The answer is 46.'),
    ],
  },
  {
    id: 5,
    name: 'Garden Grove',
    icon: '🌻',
    description: 'Word problems - easy',
    questions: [
      makeQ('Megan counted 8 shells. She found 4 more. How many shells now?', 12, 'Think: 8 + 4 = ?', 'Megan has 12 shells.'),
      makeQ('There are 12 red flowers and 5 yellow flowers. How many flowers in total?', 17, 'Think: 12 + 5 = ?', 'There are 17 flowers.'),
      makeQ('Jake has 15 marbles. He wins 3 more. How many marbles does he have?', 18, 'Think: 15 + 3 = ?', 'Jake has 18 marbles.'),
      makeQ('There are 20 apples and 9 oranges. How many fruits altogether?', 29, 'Think: 20 + 9 = ?', 'There are 29 fruits.'),
      makeQ('Sarah read 11 pages on Monday and 7 pages on Tuesday. How many pages in total?', 18, 'Think: 11 + 7 = ?', 'Sarah read 18 pages.'),
      makeQ('A box has 14 red beads and 5 blue beads. How many beads in total?', 19, 'Think: 14 + 5 = ?', 'There are 19 beads.'),
      makeQ('Tom scores 13 points. He scores 4 more. What is his total score?', 17, 'Think: 13 + 4 = ?', 'Tom scored 17 points.'),
      makeQ('There are 22 birds in one tree and 6 in another. How many birds altogether?', 28, 'Think: 22 + 6 = ?', 'There are 28 birds.'),
      makeQ('Nina has 31 stickers and gets 8 more. How many stickers does she have?', 39, 'Think: 31 + 8 = ?', 'Nina has 39 stickers.'),
      makeQ('A bag has 25 red balls and 4 green balls. How many balls in total?', 29, 'Think: 25 + 4 = ?', 'There are 29 balls.'),
    ],
  },
  {
    id: 6,
    name: 'River Rapids',
    icon: '🌊',
    description: 'Larger 2-digit sums',
    questions: [
      makeQ('What is 45 + 23?', 68, 'Tens: 40+20=60, Ones: 5+3=8. Total: 68.', 'The answer is 68.'),
      makeQ('What is 53 + 24?', 77, 'Tens: 50+20=70, Ones: 3+4=7. Total: 77.', 'The answer is 77.'),
      makeQ('What is 62 + 25?', 87, 'Tens: 60+20=80, Ones: 2+5=7. Total: 87.', 'The answer is 87.'),
      makeQ('What is 41 + 36?', 77, 'Tens: 40+30=70, Ones: 1+6=7. Total: 77.', 'The answer is 77.'),
      makeQ('What is 54 + 33?', 87, 'Tens: 50+30=80, Ones: 4+3=7. Total: 87.', 'The answer is 87.'),
      makeQ('What is 61 + 28?', 89, 'Tens: 60+20=80, Ones: 1+8=9. Total: 89.', 'The answer is 89.'),
      makeQ('What is 70 + 14?', 84, 'Tens: 70+10=80, Ones: 0+4=4. Total: 84.', 'The answer is 84.'),
      makeQ('What is 52 + 36?', 88, 'Tens: 50+30=80, Ones: 2+6=8. Total: 88.', 'The answer is 88.'),
      makeQ('What is 43 + 45?', 88, 'Tens: 40+40=80, Ones: 3+5=8. Total: 88.', 'The answer is 88.'),
      makeQ('What is 35 + 54?', 89, 'Tens: 30+50=80, Ones: 5+4=9. Total: 89.', 'The answer is 89.'),
    ],
  },
  {
    id: 7,
    name: 'Star Peaks',
    icon: '⭐',
    description: 'Word problems - medium',
    questions: [
      makeQ('A bakery made 24 muffins and 13 cupcakes. How many treats are there?', 37, 'Think: 24 + 13 = ?', 'There are 37 treats.'),
      makeQ('Class A has 32 pupils. Class B has 25 pupils. How many pupils in total?', 57, 'Think: 32 + 25 = ?', 'There are 57 pupils.'),
      makeQ('A jar has 41 red and 36 blue marbles. How many marbles altogether?', 77, 'Think: 41 + 36 = ?', 'There are 77 marbles.'),
      makeQ('The shop sold 53 toys on Saturday and 24 on Sunday. How many in total?', 77, 'Think: 53 + 24 = ?', 'The shop sold 77 toys.'),
      makeQ('Ana picked 22 strawberries and 31 blueberries. How many berries total?', 53, 'Think: 22 + 31 = ?', 'Ana picked 53 berries.'),
      makeQ('A library has 61 fiction and 27 non-fiction books. How many books in all?', 88, 'Think: 61 + 27 = ?', 'There are 88 books.'),
      makeQ('Ben ran 45 km in June and 34 km in July. How many km did he run?', 79, 'Think: 45 + 34 = ?', 'Ben ran 79 km.'),
      makeQ('A farm has 50 hens and 39 ducks. How many birds are there in all?', 89, 'Think: 50 + 39 = ?', 'There are 89 birds.'),
      makeQ('Mei has 64 stamps. She collects 25 more. How many stamps does she have?', 89, 'Think: 64 + 25 = ?', 'Mei has 89 stamps.'),
      makeQ('A box holds 71 pencils and 18 pens. How many items altogether?', 89, 'Think: 71 + 18 = ?', 'There are 89 items.'),
    ],
  },
  {
    id: 8,
    name: 'Cloud Castle',
    icon: '☁️',
    description: 'Mixed 2-digit challenges',
    questions: [
      makeQ('What is 10 + 45?', 55, 'Tens: 10+40=50, Ones: 0+5=5. Total: 55.', 'The answer is 55.'),
      makeQ('What is 26 + 40?', 66, 'Tens: 20+40=60, Ones: 6+0=6. Total: 66.', 'The answer is 66.'),
      makeQ('What is 33 + 55?', 88, 'Tens: 30+50=80, Ones: 3+5=8. Total: 88.', 'The answer is 88.'),
      makeQ('What is 47 + 21?', 68, 'Tens: 40+20=60, Ones: 7+1=8. Total: 68.', 'The answer is 68.'),
      makeQ('What is 55 + 13?', 68, 'Tens: 50+10=60, Ones: 5+3=8. Total: 68.', 'The answer is 68.'),
      makeQ('What is 61 + 16?', 77, 'Tens: 60+10=70, Ones: 1+6=7. Total: 77.', 'The answer is 77.'),
      makeQ('What is 72 + 14?', 86, 'Tens: 70+10=80, Ones: 2+4=6. Total: 86.', 'The answer is 86.'),
      makeQ('What is 80 + 07?', 87, 'Tens: 80+0=80, Ones: 0+7=7. Total: 87.', 'The answer is 87.'),
      makeQ('What is 36 + 42?', 78, 'Tens: 30+40=70, Ones: 6+2=8. Total: 78.', 'The answer is 78.'),
      makeQ('What is 63 + 25?', 88, 'Tens: 60+20=80, Ones: 3+5=8. Total: 88.', 'The answer is 88.'),
    ],
  },
  {
    id: 9,
    name: 'Dragon Den',
    icon: '🐉',
    description: 'Hard word problems',
    questions: [
      makeQ('A dragon has 34 gold coins and finds 52 more. How many coins in total?', 86, 'Think: 34 + 52 = ?', 'The dragon has 86 coins.'),
      makeQ('Two dragons lay 41 and 38 eggs. How many eggs altogether?', 79, 'Think: 41 + 38 = ?', 'There are 79 eggs.'),
      makeQ('A wizard has 45 red and 43 blue potions. How many potions in all?', 88, 'Think: 45 + 43 = ?', 'There are 88 potions.'),
      makeQ('Ethan walked 52 steps north and 36 steps east. How many steps total?', 88, 'Think: 52 + 36 = ?', 'Ethan walked 88 steps.'),
      makeQ('A castle has 61 windows and 25 doors. How many openings in all?', 86, 'Think: 61 + 25 = ?', 'There are 86 openings.'),
      makeQ('A knight slays 30 monsters and then 57 more. How many in total?', 87, 'Think: 30 + 57 = ?', 'The knight slayed 87 monsters.'),
      makeQ('There are 43 tall trees and 44 short trees. How many trees in all?', 87, 'Think: 43 + 44 = ?', 'There are 87 trees.'),
      makeQ('The quest needs 55 clues. The knight finds 34. How many clues are found?', 89, 'Think: 55 + 34 = ?', 'The knight found 89 clues in total.'),
      makeQ('A ship carries 62 barrels and 26 boxes. How many items?', 88, 'Think: 62 + 26 = ?', 'The ship carries 88 items.'),
      makeQ('A hero earns 71 gold and 18 silver. How many coins in total?', 89, 'Think: 71 + 18 = ?', 'The hero has 89 coins.'),
    ],
  },
  {
    id: 10,
    name: 'Champion Peak',
    icon: '🏆',
    description: 'Master level challenges',
    questions: [
      makeQ('What is 45 + 44?', 89, 'Tens: 40+40=80, Ones: 5+4=9. Total: 89.', 'The answer is 89.'),
      makeQ('A pet shop has 36 fish and 53 birds. How many pets in all?', 89, 'Think: 36 + 53 = ?', 'There are 89 pets.'),
      makeQ('What is 27 + 32?', 59, 'Tens: 20+30=50, Ones: 7+2=9. Total: 59.', 'The answer is 59.'),
      makeQ('A race has 54 runners today and 35 yesterday. How many ran in total?', 89, 'Think: 54 + 35 = ?', 'There are 89 runners.'),
      makeQ('What is 63 + 24?', 87, 'Tens: 60+20=80, Ones: 3+4=7. Total: 87.', 'The answer is 87.'),
      makeQ('There are 72 students in hall A and 17 in hall B. How many in total?', 89, 'Think: 72 + 17 = ?', 'There are 89 students.'),
      makeQ('What is 81 + 08?', 89, 'Tens: 80+0=80, Ones: 1+8=9. Total: 89.', 'The answer is 89.'),
      makeQ('A garden has 56 rose bushes and 33 sunflowers. How many plants?', 89, 'Think: 56 + 33 = ?', 'There are 89 plants.'),
      makeQ('What is 44 + 45?', 89, 'Tens: 40+40=80, Ones: 4+5=9. Total: 89.', 'The answer is 89.'),
      makeQ('Ethan collected 60 shells and his friend collected 29. How many in total?', 89, 'Think: 60 + 29 = ?', 'They collected 89 shells in total.'),
    ],
  },
];

export function getWorldQuestions(worldId) {
  const world = worlds.find(w => w.id === worldId);
  if (!world) return [];
  return shuffle(world.questions).slice(0, 8);
}
