import { useState, useCallback, useEffect, useRef } from 'react';
import { worlds, getWorldQuestions } from '../../data/questionBank.js';
import { shuffle } from '../../utils/shuffle.js';
import FeedbackOverlay from '../shared/FeedbackOverlay.jsx';
import { useAudio } from '../../hooks/useAudio.js';
import { feedbackNarration } from '../../utils/narration.js';

/* helper: generate 4 MCQ options */
function makeOptions(answer) {
  const set = new Set([answer]);
  let attempts = 0;
  while (set.size < 4 && attempts < 40) {
    attempts++;
    const delta = Math.floor(Math.random() * 14) - 7;
    const v = answer + delta;
    if (v > 0 && v !== answer) set.add(v);
  }
  return shuffle([...set]);
}

/* ── World selector ─────────────────────────────────────────────── */
function WorldSelector({ worldProgress, onSelectWorld }) {
  return (
    <div className="world-selector">
      <div className="world-selector-header">
        <h2 className="world-selector-title">🌍 Choose Your World</h2>
        <p className="world-selector-subtitle">Pick a world to start, then earn stars as you play.</p>
      </div>
      <div className="worlds-grid">
        {worlds.map((w, i) => {
          const prog = worldProgress[i];
          const isLocked = !prog.unlocked;
          const isDone   = prog.completed;
          return (
            <button
              type="button"
              key={w.id}
              className={`world-card ${isLocked ? 'locked' : ''} ${isDone ? 'completed' : ''}`}
              onClick={() => !isLocked && onSelectWorld(w.id)}
              aria-label={`${w.name}${isLocked ? ' locked' : ''}`}
            >
              <span className="world-card-icon">{isLocked ? '🔒' : w.icon}</span>
              <div className="world-card-name">{w.name}</div>
              <div className="world-card-info">{w.description}</div>
              <div className={`world-card-pill ${isLocked ? 'locked' : isDone ? 'done' : 'ready'}`}>
                {isLocked ? 'Locked' : isDone ? 'Done' : 'Ready'}
              </div>
              {isDone && (
                <div className="world-stars">
                  {Array.from({ length: 3 }).map((_, si) => (
                    <span key={si} className="world-star">
                      {si < prog.stars ? '⭐' : '☆'}
                    </span>
                  ))}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ── World complete screen ──────────────────────────────────────── */
function WorldCompleteScreen({ result, onBackToMap, onNextWorld, hasNext }) {
  const { correct, total, stars } = result;
  return (
    <div className="world-complete">
      <div className="world-complete-emoji">
        {stars === 3 ? '🏆' : stars === 2 ? '🌟' : stars === 1 ? '⭐' : '💪'}
      </div>
      <h2 className="world-complete-title">World Complete!</h2>
      <p className="world-complete-score">
        You got {correct} out of {total} correct!
      </p>
      <div className="world-complete-stars">
        {Array.from({ length: 3 }).map((_, i) => (
          <span key={i}>{i < stars ? '⭐' : '☆'}</span>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
        <button className="world-complete-btn" style={{
          background: 'var(--bg-card)', border: '1px solid var(--border-light)', fontSize: 14
        }} onClick={onBackToMap}>
          ← World Map
        </button>
        {hasNext && (
          <button className="world-complete-btn" onClick={onNextWorld}>
            Next World →
          </button>
        )}
      </div>
    </div>
  );
}

/* ── Main PlayPhase ─────────────────────────────────────────────── */
export default function PlayPhase({ state, dispatch, onFinish }) {
  const {
    activeWorld, currentQuestions, currentQuestion,
    answeredQuestions, lives, streak, xp,
    feedbackVisible, feedbackCorrect, feedbackExplanation, xpGained,
    showWorldComplete, lastWorldResult, worldProgress,
  } = state;

  const [selectedOption, setSelectedOption] = useState(null);
  const [hintVisible, setHintVisible]       = useState(false);
  const [options, setOptions]               = useState([]);

  // play() from the global singleton — stops any concurrent audio automatically
  const { play, stop } = useAudio(state.audioEnabled);
  const lastQuestionKey = useRef('');

  const q    = currentQuestions[currentQuestion];
  const qKey = activeWorld + '-' + currentQuestion;

  if (q && options.length === 0) {
    setOptions(makeOptions(q.answer));
  }

  function startWorld(worldId) {
    const questions = getWorldQuestions(worldId);
    stop();
    lastQuestionKey.current = `${worldId}-0-${questions[0]?.text ?? ''}`;
    play(questions[0]?.text);
    dispatch({ type: 'START_WORLD', worldId, questions });
    setSelectedOption(null);
    setHintVisible(false);
    setOptions([]);
  }

  function handleOption(opt) {
    if (feedbackVisible || selectedOption !== null) return;
    setSelectedOption(opt);
    const correct = opt === q.answer;
    dispatch({ type: 'ANSWER_QUESTION', correct, explanation: q.explanation });
    // play() stops the question narration then plays the feedback clip
    const narration = feedbackNarration(correct);
    if (narration[0]) play(narration[0].text);
  }

  // Narrate new questions as they appear
  useEffect(() => {
    if (!q?.text) return;
    const key = `${activeWorld}-${currentQuestion}-${q.text}`;
    if (lastQuestionKey.current === key) return;
    lastQuestionKey.current = key;
    play(q.text);
  }, [activeWorld, currentQuestion, q?.text, play]);

  const handleContinue = useCallback(() => {
    setSelectedOption(null);
    setHintVisible(false);
    setOptions([]);
    dispatch({ type: 'DISMISS_FEEDBACK' });
  }, [dispatch]);

  function handleHint() {
    dispatch({ type: 'USE_HINT' });
    setHintVisible(true);
  }

  function handleNextWorld() {
    const nextId = (lastWorldResult?.worldId ?? 0) + 1;
    if (nextId <= worlds.length) startWorld(nextId);
    else onFinish();
  }

  function handleGoReflect() {
    dispatch({ type: 'ADVANCE_PHASE' });
    onFinish();
  }

  const allWorldsDone = worldProgress.every(w => w.completed);

  /* ── World selector ─────── */
  if (!activeWorld && !showWorldComplete) {
    return (
      <div className="play-phase">
        <WorldSelector worldProgress={worldProgress} onSelectWorld={startWorld} />
        {allWorldsDone && (
          <button className="world-complete-btn" onClick={handleGoReflect}>
            ✨ View My Journey →
          </button>
        )}
      </div>
    );
  }

  /* ── World complete ─────── */
  if (showWorldComplete && lastWorldResult) {
    const hasNext = lastWorldResult.worldId < worlds.length;
    return (
      <div className="play-phase">
        <WorldCompleteScreen
          result={lastWorldResult}
          onBackToMap={() => dispatch({ type: 'EXIT_WORLD' })}
          onNextWorld={handleNextWorld}
          hasNext={hasNext}
        />
        {!hasNext && (
          <button className="world-complete-btn" style={{ marginTop: 8 }} onClick={handleGoReflect}>
            ✨ See My Results →
          </button>
        )}
      </div>
    );
  }

  if (!q) return null;

  const displayOptions = options.length > 0 ? options : makeOptions(q.answer);
  const worldInfo = worlds.find(w => w.id === activeWorld);
  const totalQ = currentQuestions.length;
  const pct = Math.round(((currentQuestion) / totalQ) * 100);

  return (
    <div className="play-phase">
      {feedbackVisible && (
        <FeedbackOverlay
          correct={feedbackCorrect}
          explanation={feedbackExplanation}
          xpGained={xpGained}
          onContinue={handleContinue}
        />
      )}

      <div className="world-name-badge">
        {worldInfo?.icon} {worldInfo?.name}
      </div>

      <div className="quiz-hud">
        <div className="hud-xp">⭐ {xp}</div>
        <div className="hud-lives">
          {Array.from({ length: 3 }).map((_, i) => (
            <span key={i} className="hud-heart">
              {i < lives ? '❤️' : '🤍'}
            </span>
          ))}
        </div>
        <div className="hud-streak">🔥 {streak}x</div>
      </div>

      <div className="quiz-progress-wrap">
        <div className="quiz-progress-header">
          <span>Question {currentQuestion + 1}/{totalQ}</span>
          <span>{pct}%</span>
        </div>
        <div className="progress-bar-wrap">
          <div className="progress-bar-fill" style={{ width: `${pct}%` }} />
        </div>
      </div>

      <div className="question-card">
        <div className="question-card-badge">
          {worldInfo?.icon} Question {currentQuestion + 1} of {totalQ}
        </div>
        <p className="question-text">{q.text}</p>
        <div className="options-grid">
          {displayOptions.map((opt, i) => {
            let cls = 'option-btn';
            if (selectedOption !== null) {
              if (opt === q.answer) cls += ' correct';
              else if (opt === selectedOption) cls += ' wrong';
            }
            return (
              <button key={i} className={cls}
                onClick={() => handleOption(opt)}
                disabled={selectedOption !== null}>
                {opt}
              </button>
            );
          })}
        </div>

        {!hintVisible && selectedOption === null && (
          <button className="quiz-hint-btn" onClick={handleHint}>
            💡 Show Hint
          </button>
        )}

        {hintVisible && (
          <div className="quiz-hint-box">
            💡 <strong>Hint:</strong> {q.hint}
          </div>
        )}
      </div>
    </div>
  );
}
