import React from 'react';

export default function IntroScreen({ onStart }) {
  return (
    <div className="intro-screen">
      <div className="intro-grade-badge">
        ✦ MATHS · Grade 2
      </div>

      <h1 className="intro-title">
        Addition Without<br /><span>Regrouping</span>
      </h1>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <div className="intro-mascot">🐻</div>
        <div className="intro-speech">
          Ready to add numbers? Let's go! 🚀
        </div>
      </div>

      <p className="intro-subtitle">
        Join Ethan on a journey to master addition within 100 through
        stories, simulations, and fun games!
      </p>

      <div className="intro-phases-row">
        {[
          { icon: '❓', name: 'Wonder' },
          { icon: '📖', name: 'Story' },
          { icon: '🎮', name: 'Simulate' },
          { icon: '🕹️', name: 'Play' },
          { icon: '⭐', name: 'Reflect' },
        ].map((p, i, arr) => (
          <React.Fragment key={p.name}>
            <div className="intro-phase-item">
              <span className="intro-phase-icon">{p.icon}</span>
              <span className="intro-phase-name">{p.name}</span>
            </div>
            {i < arr.length - 1 && <span className="intro-arrow">→</span>}
          </React.Fragment>
        ))}
      </div>

      <button className="intro-cta-btn" onClick={onStart}>
        🚀 Begin Your Journey!
      </button>

      <div className="intro-badges">
        <span className="intro-feature-badge">🔢 Place Value</span>
        <span className="intro-feature-badge">📊 Simulations</span>
        <span className="intro-feature-badge">🎯 100 Questions</span>
      </div>
    </div>
  );
}
