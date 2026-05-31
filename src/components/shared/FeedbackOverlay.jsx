import { useEffect } from 'react';

export default function FeedbackOverlay({ correct, explanation, xpGained, onContinue }) {
  useEffect(() => {
    const t = setTimeout(onContinue, 2200);
    return () => clearTimeout(t);
  }, [onContinue]);

  return (
    <>
      {xpGained > 0 && (
        <div className="xp-gained-badge">+{xpGained} XP</div>
      )}

      <div className="feedback-overlay" onClick={onContinue}>
        <div className={`feedback-card ${correct ? 'correct' : 'wrong'}`}>
          <span className="feedback-emoji">
            {correct ? '🎉' : '😢'}
          </span>
          <h3 className="feedback-title">
            {correct ? 'Correct! 🎊' : 'Not quite!'}
          </h3>
          <p className="feedback-explanation">{explanation}</p>
          <button className="feedback-continue-btn">
            {correct ? 'Keep Going! →' : 'Try Next →'}
          </button>
        </div>
      </div>
    </>
  );
}
