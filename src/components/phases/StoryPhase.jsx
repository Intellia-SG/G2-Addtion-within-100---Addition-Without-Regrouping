import { useEffect, useRef } from 'react';
import { storyPanels } from '../../data/storyContent.js';
import { useAudio } from '../../hooks/useAudio.js';
import { storyNarration } from '../../utils/narration.js';

export default function StoryPhase({ storyPanel, audioEnabled, dispatch, onNext }) {
  // playQueue uses the global singleton — any concurrent audio is cancelled
  // automatically when a new queue starts.
  const { playQueue, stop } = useAudio(audioEnabled);
  const lastSpokenPanel = useRef(-1);
  const panel = storyPanels[storyPanel];
  const total = storyPanels.length;

  // Play narration whenever the panel changes (but only once per panel)
  useEffect(() => {
    if (!audioEnabled || lastSpokenPanel.current === storyPanel) return;
    lastSpokenPanel.current = storyPanel;
    playQueue(storyNarration(storyPanel));
  }, [audioEnabled, storyPanel, playQueue]);

  function handleNext() {
    if (storyPanel < total - 1) {
      const next = storyPanel + 1;
      lastSpokenPanel.current = next;
      playQueue(storyNarration(next));
      dispatch({ type: 'SET_STORY_PANEL', payload: next });
    } else {
      stop();  // silence before transitioning out
      onNext();
    }
  }

  function handleBack() {
    if (storyPanel > 0) {
      const prev = storyPanel - 1;
      lastSpokenPanel.current = prev;
      playQueue(storyNarration(prev));
      dispatch({ type: 'SET_STORY_PANEL', payload: prev });
    }
  }

  return (
    <div className="story-phase">
      {/* Progress bar */}
      <div style={{ width: '100%', maxWidth: 680, padding: '10px 0 0' }}>
        <div className="progress-bar-wrap">
          <div
            className="progress-bar-fill"
            style={{ width: `${((storyPanel + 1) / total) * 100}%` }}
          />
        </div>
      </div>

      <div className="story-header">
        <span />
        <span className="story-panel-count">{storyPanel + 1} / {total}</span>
      </div>

      <div className="story-card">
        <div className="story-media-frame" style={panel.image ? undefined : { background: panel.gradient }}>
          {panel.image ? (
            <img className="story-image" src={panel.image} alt={panel.title} />
          ) : (
            <div className="story-image-placeholder">
              <span style={{ fontSize: 72 }}>{panel.emoji}</span>
              {panel.emojiExtra && (
                <span style={{ fontSize: 48, opacity: 0.7 }}>{panel.emojiExtra}</span>
              )}
            </div>
          )}
        </div>

        <div className="story-body">
          <h2 className="story-title">{panel.title}</h2>
          <p className="story-text">{panel.text}</p>
          <div className="story-highlight-box">{panel.highlight}</div>
          <div className="story-mascot-row">
            <div className="mascot-avatar">🐻</div>
            <div className="mascot-bubble">{panel.mascotSpeech}</div>
          </div>
        </div>
      </div>

      {/* Sticky bottom nav */}
      <div className="story-nav">
        <button className="story-back-btn" onClick={handleBack} disabled={storyPanel === 0}
          style={{ opacity: storyPanel === 0 ? 0.35 : 1 }}>
          ← Back
        </button>

        <div className="story-dots">
          {storyPanels.map((_, i) => (
            <div
              key={i}
              className={`story-dot ${i === storyPanel ? 'active' : i < storyPanel ? 'completed' : ''}`}
            />
          ))}
        </div>

        <button className="story-next-btn" onClick={handleNext}>
          {storyPanel < total - 1 ? 'Next →' : 'Go to Simulate →'}
        </button>
      </div>
    </div>
  );
}
