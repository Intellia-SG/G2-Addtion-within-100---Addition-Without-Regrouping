import { useReducer } from 'react';
import { calculateXP, calculateStars } from '../utils/scoring.js';

export const PHASES = { INTRO: 0, WONDER: 1, STORY: 2, SIMULATE: 3, PLAY: 4, REFLECT: 5 };

const initialState = {
  phase: PHASES.INTRO,
  completedPhases: [],
  // story
  storyPanel: 0,
  // simulate
  station: 0,
  completedStations: [],
  // play
  worldProgress: Array.from({ length: 10 }, (_, i) => ({
    id: i + 1, unlocked: i === 0, completed: false, stars: 0, bestScore: 0
  })),
  activeWorld: null,
  currentQuestions: [],
  currentQuestion: 0,
  answeredQuestions: [],
  lives: 3,
  streak: 0,
  maxStreak: 0,
  xp: 0,
  usedHint: false,
  // world complete
  showWorldComplete: false,
  lastWorldResult: null,
  // feedback
  feedbackVisible: false,
  feedbackCorrect: false,
  feedbackExplanation: '',
  xpGained: 0,
  // audio
  audioEnabled: true,
  // reflect
  totalCorrect: 0,
  totalAttempts: 0,
};

function gameReducer(state, action) {
  switch (action.type) {

    case 'SET_PHASE':
      return { ...state, phase: action.payload };

    case 'COMPLETE_PHASE': {
      const done = state.completedPhases.includes(action.payload)
        ? state.completedPhases
        : [...state.completedPhases, action.payload];
      return { ...state, completedPhases: done };
    }

    case 'ADVANCE_PHASE':
      return {
        ...state,
        completedPhases: state.completedPhases.includes(state.phase)
          ? state.completedPhases
          : [...state.completedPhases, state.phase],
        phase: state.phase + 1,
      };

    // ── Story
    case 'SET_STORY_PANEL':
      return { ...state, storyPanel: action.payload };

    // ── Simulate
    case 'SET_STATION':
      return { ...state, station: action.payload };

    case 'COMPLETE_STATION': {
      const done = state.completedStations.includes(action.payload)
        ? state.completedStations
        : [...state.completedStations, action.payload];
      return { ...state, completedStations: done };
    }

    // ── Play: start world
    case 'START_WORLD':
      return {
        ...state,
        activeWorld: action.worldId,
        currentQuestions: action.questions,
        currentQuestion: 0,
        answeredQuestions: [],
        lives: 3,
        streak: 0,
        usedHint: false,
        feedbackVisible: false,
        showWorldComplete: false,
        lastWorldResult: null,
      };

    // ── Answer
    case 'ANSWER_QUESTION': {
      const { correct, explanation } = action;
      const xpGained = calculateXP({ correct, usedHint: state.usedHint, streak: state.streak });
      const newStreak = correct ? state.streak + 1 : 0;
      const newMaxStreak = Math.max(state.maxStreak, newStreak);
      const newLives = correct ? state.lives : Math.max(0, state.lives - 1);
      const newXP = state.xp + xpGained;
      const answered = [
        ...state.answeredQuestions,
        { correct, questionIndex: state.currentQuestion },
      ];
      return {
        ...state,
        feedbackVisible: true,
        feedbackCorrect: correct,
        feedbackExplanation: explanation,
        xpGained,
        streak: newStreak,
        maxStreak: newMaxStreak,
        lives: newLives,
        xp: newXP,
        usedHint: false,
        answeredQuestions: answered,
        totalCorrect: state.totalCorrect + (correct ? 1 : 0),
        totalAttempts: state.totalAttempts + 1,
      };
    }

    case 'USE_HINT':
      return { ...state, usedHint: true };

    case 'DISMISS_FEEDBACK': {
      const nextQ = state.currentQuestion + 1;
      const isLast = nextQ >= state.currentQuestions.length;
      if (isLast || state.lives === 0) {
        // compute result
        const correct = state.answeredQuestions.filter(q => q.correct).length;
        const total = state.currentQuestions.length;
        const stars = calculateStars(correct, total);
        const newProgress = state.worldProgress.map(w => {
          if (w.id === state.activeWorld) {
            // unlock next world
            return { ...w, completed: true, stars: Math.max(w.stars, stars), bestScore: Math.max(w.bestScore, correct) };
          }
          if (w.id === state.activeWorld + 1) {
            return { ...w, unlocked: true };
          }
          return w;
        });
        return {
          ...state,
          feedbackVisible: false,
          showWorldComplete: true,
          lastWorldResult: { correct, total, stars, worldId: state.activeWorld },
          worldProgress: newProgress,
        };
      }
      return {
        ...state,
        feedbackVisible: false,
        currentQuestion: nextQ,
        usedHint: false,
      };
    }

    case 'EXIT_WORLD':
      return {
        ...state,
        activeWorld: null,
        showWorldComplete: false,
        feedbackVisible: false,
        currentQuestions: [],
      };

    case 'TOGGLE_AUDIO':
      return { ...state, audioEnabled: !state.audioEnabled };

    case 'RESET':
      return { ...initialState };

    default:
      return state;
  }
}

export function useGameState() {
  return useReducer(gameReducer, initialState);
}
