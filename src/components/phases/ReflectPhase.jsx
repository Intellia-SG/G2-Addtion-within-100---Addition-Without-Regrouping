import { worlds } from '../../data/questionBank.js';

export default function ReflectPhase({ state, onRestart }) {
  const { xp, totalCorrect, totalAttempts, maxStreak, worldProgress } = state;
  const completedWorlds = worldProgress.filter(w => w.completed);
  const accuracy = totalAttempts > 0
    ? Math.round((totalCorrect / totalAttempts) * 100)
    : 0;

  return (
    <div className="reflect-phase">
      <div className="reflect-card">
        <div className="reflect-hero">🎓</div>
        <h2 className="reflect-title">Your Journey!</h2>
        <p className="reflect-subtitle">
          Amazing work, Ethan! Here's what you achieved today.
        </p>

        <div className="reflect-stats">
          <div className="reflect-stat">
            <span className="reflect-stat-value">⭐ {xp}</span>
            <span className="reflect-stat-label">XP Earned</span>
          </div>
          <div className="reflect-stat">
            <span className="reflect-stat-value">{accuracy}%</span>
            <span className="reflect-stat-label">Accuracy</span>
          </div>
          <div className="reflect-stat">
            <span className="reflect-stat-value">🔥 {maxStreak}</span>
            <span className="reflect-stat-label">Best Streak</span>
          </div>
          <div className="reflect-stat">
            <span className="reflect-stat-value">{totalCorrect}</span>
            <span className="reflect-stat-label">Correct</span>
          </div>
          <div className="reflect-stat">
            <span className="reflect-stat-value">{totalAttempts}</span>
            <span className="reflect-stat-label">Attempts</span>
          </div>
          <div className="reflect-stat">
            <span className="reflect-stat-value">{completedWorlds.length}</span>
            <span className="reflect-stat-label">Worlds Done</span>
          </div>
        </div>

        {completedWorlds.length > 0 && (
          <>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 700, marginBottom: 10 }}>
              WORLDS COMPLETED
            </p>
            <div className="reflect-worlds-done">
              {completedWorlds.map(wp => {
                const world = worlds.find(w => w.id === wp.id);
                return (
                  <div key={wp.id} className="reflect-world-pill">
                    {world?.icon} {world?.name}
                    <span style={{ color: 'var(--accent-gold)' }}>
                      {Array.from({ length: wp.stars }).map(() => '⭐').join('')}
                    </span>
                  </div>
                );
              })}
            </div>
          </>
        )}

        <div className="reflect-tip">
          <strong>🧠 Key Takeaway:</strong> When adding two numbers without regrouping, 
          always add the <strong>ones</strong> first, then the <strong>tens</strong>. 
          As long as the ones digits add up to 9 or less and the tens digits add up to 9 or less,
          no carrying is needed!
        </div>

        <button className="reflect-restart-btn" onClick={onRestart}>
          🚀 Play Again!
        </button>
      </div>
    </div>
  );
}
