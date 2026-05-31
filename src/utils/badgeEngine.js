export const BADGES = [
  {
    id: 'first_correct',
    name: 'First Steps',
    icon: '🌱',
    description: 'Get your first correct answer',
    check: (s) => s.totalCorrect >= 1,
  },
  {
    id: 'streak_3',
    name: 'On Fire!',
    icon: '🔥',
    description: 'Get a 3-answer streak',
    check: (s) => s.maxStreak >= 3,
  },
  {
    id: 'streak_5',
    name: 'Blazing!',
    icon: '💥',
    description: 'Get a 5-answer streak',
    check: (s) => s.maxStreak >= 5,
  },
  {
    id: 'first_world',
    name: 'World Explorer',
    icon: '🗺️',
    description: 'Complete your first world',
    check: (s) => s.worldProgress.filter(w => w.completed).length >= 1,
  },
  {
    id: 'five_worlds',
    name: 'Globetrotter',
    icon: '✈️',
    description: 'Complete 5 worlds',
    check: (s) => s.worldProgress.filter(w => w.completed).length >= 5,
  },
  {
    id: 'all_worlds',
    name: 'Champion!',
    icon: '🏆',
    description: 'Complete all 10 worlds',
    check: (s) => s.worldProgress.every(w => w.completed),
  },
  {
    id: 'perfect_world',
    name: 'Perfectionist',
    icon: '💎',
    description: 'Get 3 stars on any world',
    check: (s) => s.worldProgress.some(w => w.stars === 3),
  },
  {
    id: 'xp_100',
    name: 'XP Master',
    icon: '⚡',
    description: 'Earn 100 XP',
    check: (s) => s.xp >= 100,
  },
];

export function checkBadges(state) {
  return BADGES.filter(b => !state.badges?.includes(b.id) && b.check(state)).map(b => b.id);
}
