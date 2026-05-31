import { useEffect, useRef } from 'react';
import { storyPanels } from '../../data/storyContent.js';
import { useAudio } from '../../hooks/useAudio.js';
import { storyNarration } from '../../utils/narration.js';

export default function StoryPhase({ storyPanel, audioEnabled, dispatch, onNext }) {
  const { play, stop } = useAudio(audioEnabled);
  const lastSpokenPanel = useRef(-1);
  const narrationRunId = useRef(0);
  const panel = storyPanels[storyPanel];
  const total = storyPanels.length;

  async function speakPanel(nextIndex) {
    const runId = ++narrationRunId.current;
    stop();
    const segments = storyNarration(nextIndex);
    for (const segment of segments) {
      if (runId !== narrationRunId.current) return;
      const audio = await play(segment.text);
      if (!audio) return;
      if (runId !== narrationRunId.current) {
        audio.pause();
        audio.currentTime = 0;
        return;
      }
      await new Promise(resolve => {
        const done = () => {
          audio.removeEventListener('ended', done);
          audio.removeEventListener('error', done);
          resolve();
        };
        audio.addEventListener('ended', done);
        audio.addEventListener('error', done);
      });
    }
  }

  useEffect(() => {
    if (!audioEnabled || lastSpokenPanel.current === storyPanel) return;
    lastSpokenPanel.current = storyPanel;
    speakPanel(storyPanel);
  }, [audioEnabled, storyPanel]);

  useEffect(() => () => {
    narrationRunId.current += 1;
    stop();
  }, [stop]);

  function handleNext() {
    if (storyPanel < total - 1) {
      lastSpokenPanel.current = storyPanel + 1;
      speakPanel(storyPanel + 1);
      dispatch({ type: 'SET_STORY_PANEL', payload: storyPanel + 1 });
    } else {
      onNext();
    }
  }

  function handleBack() {
    if (storyPanel > 0) {
      lastSpokenPanel.current = storyPanel - 1;
      speakPanel(storyPanel - 1);
      dispatch({ type: 'SET_STORY_PANEL', payload: storyPanel - 1 });
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
