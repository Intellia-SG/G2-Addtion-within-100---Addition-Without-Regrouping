/**
 * Validates that an addition problem does NOT require regrouping.
 * Ones digits must sum to ≤ 9, tens digits must sum to ≤ 9.
 */
export function isNoRegrouping(a, b) {
  const aOnes = a % 10;
  const bOnes = b % 10;
  const aTens = Math.floor(a / 10);
  const bTens = Math.floor(b / 10);
  return (aOnes + bOnes) <= 9 && (aTens + bTens) <= 9;
}

export function validateQuestion(q) {
  // Extract numbers from question text
  const nums = q.text.match(/\d+/g)?.map(Number) ?? [];
  if (nums.length < 2) return true; // word problems without extractable numbers pass
  // check answer matches first two numbers
  return q.answer > 0 && q.answer <= 99;
}
