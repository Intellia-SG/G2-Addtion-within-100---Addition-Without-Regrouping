import { useGameState, PHASES } from './hooks/useGameState.js';
import { useAudio } from './hooks/useAudio.js';
import IntroScreen   from './components/IntroScreen.jsx';
import WonderPhase   from './components/phases/WonderPhase.jsx';
import StoryPhase    from './components/phases/StoryPhase.jsx';
import SimulatePhase from './components/phases/SimulatePhase.jsx';
import PlayPhase     from './components/phases/PlayPhase.jsx';
import ReflectPhase  from './components/phases/ReflectPhase.jsx';
import {
  wonderNarration,
  reflectNarration,
} from './utils/narration.js';

const PHASE_DEFS = [
  { label: 'Wonder',   icon: '❓' },
  { label: 'Story',    icon: '📖' },
  { label: 'Simulate', icon: '🎮' },
  { label: 'Play',     icon: '🕹️' },
  { label: 'Reflect',  icon: '⭐' },
];

function PhaseNav({ phase, completedPhases, audioEnabled, dispatch }) {
  if (phase === PHASES.INTRO) return null;

  const phaseIndex = phase - 1;

  function handlePhaseSelect(phaseId, isLocked) {
    if (isLocked) return;
    dispatch({ type: 'SET_PHASE', payload: phaseId });
  }

  return (
    <nav className="phase-nav">
      <button className="nav-home-btn" onClick={() => dispatch({ type: 'SET_PHASE', payload: PHASES.INTRO })}>
        🏠 Home
      </button>

      <div className="phase-track">
        {PHASE_DEFS.map((p, i) => {
          const phaseId = i + 1;
          const isActive    = phaseIndex === i;
          const isCompleted = completedPhases.includes(phaseId);
          const isLocked    = !isActive && !isCompleted;

          return (
            <button
              key={p.label}
              type="button"
              className="phase-step"
              onClick={() => handlePhaseSelect(phaseId, isLocked)}
              disabled={isLocked}
              aria-label={`Go to ${p.label}`}
              aria-current={isActive ? 'step' : undefined}
              title={isLocked ? `${p.label} is locked` : `Go to ${p.label}`}
            >
              {i > 0 && (
                <div className={`phase-connector ${
                  completedPhases.includes(phaseId) || phaseIndex > i ? 'completed'
                  : phaseIndex === i ? 'active' : ''
                }`} />
              )}
              <div className="phase-circle">
                <div className={`phase-badge ${isCompleted ? 'completed' : isActive ? 'active' : 'locked'}`}>
                  {isCompleted ? '✓' : isActive ? <span style={{fontSize:11}}>{String(phaseId).padStart(2,'0')}</span> : p.icon}
                </div>
                <span className={`phase-label ${isCompleted ? 'completed' : isActive ? 'active' : ''}`}>
                  {p.label}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <button className="nav-audio-btn"
        onClick={() => dispatch({ type: 'TOGGLE_AUDIO' })}
        title={audioEnabled ? 'Mute audio' : 'Unmute audio'}>
        {audioEnabled ? '🔊' : '🔇'}
      </button>

      <button className="nav-close-btn"
        onClick={() => dispatch({ type: 'RESET' })}
        title="Restart">
        ✕
      </button>
    </nav>
  );
}

export default function App() {
  const [state, dispatch] = useGameState();
  // Single shared audio hook — stop() here stops audio everywhere
  const { playQueue, stop } = useAudio(state.audioEnabled);

  const { phase, completedPhases, storyPanel, station, completedStations, audioEnabled } = state;

  function advanceTo(next) {
    dispatch({ type: 'COMPLETE_PHASE', payload: phase });
    dispatch({ type: 'SET_PHASE', payload: next });
  }

  // INTRO → WONDER
  // WonderPhase has no internal audio; App owns it.
  function handleStart() {
    stop(); // silence any lingering audio first
    playQueue(wonderNarration());
    dispatch({ type: 'SET_PHASE', payload: PHASES.WONDER });
  }

  // WONDER → STORY
  // StoryPhase manages its own narration via useEffect — do NOT start
  // narration here or the same audio will play twice simultaneously.
  function handleWonderNext() {
    stop(); // cancel wonder narration before Story mounts
    advanceTo(PHASES.STORY);
  }

  // STORY → SIMULATE
  // SimulatePhase manages its own narration via useEffect — same rule.
  function handleStoryNext() {
    stop(); // cancel story narration before Simulate mounts
    advanceTo(PHASES.SIMULATE);
  }

  // SIMULATE → PLAY
  function handleSimNext() {
    stop();
    advanceTo(PHASES.PLAY);
  }

  // PLAY → REFLECT
  // ReflectPhase has no internal audio; App owns it.
  function handleReflect() {
    stop(); // cancel any Play audio before Reflect narration starts
    advanceTo(PHASES.REFLECT);
    playQueue(reflectNarration());
  }

  function handleRestart() { dispatch({ type: 'RESET' }); }

  return (
    <div className="app">
      <PhaseNav
        phase={phase}
        completedPhases={completedPhases}
        audioEnabled={audioEnabled}
        dispatch={dispatch}
      />

      {phase === PHASES.INTRO    && <IntroScreen onStart={handleStart} />}
      {phase === PHASES.WONDER   && <WonderPhase onNext={handleWonderNext} />}
      {phase === PHASES.STORY    && (
        <StoryPhase
          storyPanel={storyPanel}
          audioEnabled={audioEnabled}
          dispatch={dispatch}
          onNext={handleStoryNext}
        />
      )}
      {phase === PHASES.SIMULATE && (
        <SimulatePhase
          station={station}
          completedStations={completedStations}
          audioEnabled={audioEnabled}
          dispatch={dispatch}
          onNext={handleSimNext}
        />
      )}
      {phase === PHASES.PLAY     && (
        <PlayPhase
          state={state}
          dispatch={dispatch}
          onFinish={handleReflect}
        />
      )}
      {phase === PHASES.REFLECT  && (
        <ReflectPhase state={state} onRestart={handleRestart} />
      )}
    </div>
  );
}
