// src/utils/shuffle.js
// Fisher-Yates shuffle algorithm and session question generator

export function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function generateSessionQuestions(bank) {
  // Organizes all 100 questions cleanly in world order (10 worlds x 10 questions)
  const byDistrict = Array.from({ length: 10 }, (_, distId) => {
    const qs = bank.filter(q => q.districtId === distId);
    return shuffle(qs);
  });
  return byDistrict.flat();
}

export default shuffle;
