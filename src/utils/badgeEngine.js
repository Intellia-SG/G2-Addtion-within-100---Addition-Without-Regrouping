// src/utils/badgeEngine.js
// Badge definitions and unlock triggers for AdditionQuest

export const BADGES = [
  { id: 'first_addition',  icon: '🏅', label: 'First Sum',        description: 'Answered your very first addition problem correctly!' },
  { id: 'hot_streak',      icon: '🔥', label: 'Hot Streak',       description: 'Achieved a streak of 5 correct answers!' },
  { id: 'super_streak',    icon: '⚡', label: 'Addition Prodigy', description: 'Achieved a 10-question winning streak!' },
  { id: 'sim_champion',    icon: '🧪', label: 'Lab Champion',     description: 'Completed all 4 interactive simulation stations!' },
  { id: 'district_champ',  icon: '⭐', label: 'World Star',       description: 'Scored 3 stars in a Practice World!' },
  { id: 'boss_slayer',     icon: '👑', label: 'Boss Slayer',      description: 'Defeated a World Boss in battle!' },
  { id: 'century_scorer',  icon: '🎯', label: 'Centurion',        description: 'Answered over 20 questions in Practice!' },
  { id: 'addition_master', icon: '🏆', label: 'Addition Master',  description: 'Completed the full 5-phase AdditionQuest journey!' },
];

export function checkBadges(state) {
  const unlocked = [];

  // First correct answer
  const totalCorrect = state.districtCorrect?.reduce((s, c) => s + (c || 0), 0) || 0;
  if (totalCorrect >= 1) unlocked.push('first_addition');

  // Streak checks
  if (state.maxStreak >= 5) unlocked.push('hot_streak');
  if (state.maxStreak >= 10) unlocked.push('super_streak');

  // Simulation completion
  if (state.simStationsComplete && state.simStationsComplete.every(Boolean)) {
    unlocked.push('sim_champion');
  }

  // 3-star district check
  if (state.districtScores && state.districtScores.some(score => score !== null && score >= 9)) {
    unlocked.push('district_champ');
  }

  // Centurion (20+ answered or current question >= 20)
  if (state.currentQuestion >= 20 || totalCorrect >= 20) {
    unlocked.push('century_scorer');
  }

  // Full journey
  if (state.phaseComplete && Object.values(state.phaseComplete).every(Boolean)) {
    unlocked.push('addition_master');
  }

  return unlocked;
}

export default checkBadges;
