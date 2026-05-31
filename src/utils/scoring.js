export function calculateXP({ correct, usedHint, streak }) {
  if (!correct) return 0;
  let xp = 10;
  if (usedHint) xp = Math.min(xp, 5);
  if (streak >= 3) xp += 2;
  if (streak >= 5) xp += 3;
  return xp;
}

export function calculateStars(correct, total) {
  const pct = correct / total;
  if (pct >= 0.9) return 3;
  if (pct >= 0.7) return 2;
  if (pct >= 0.5) return 1;
  return 0;
}

export function getStarDisplay(stars) {
  return ['⭐', '⭐', '⭐'].map((s, i) => (i < stars ? s : '☆')).join('');
}
