// src/components/simulations/AdditionDetectiveStation.jsx — Fixed: compact layout so keypad never clips
import React, { useState } from 'react';
import { useAudio } from '../../hooks/useAudio.js';
import './Stations.css';

const CASES = [
  { student: 'Sam', emoji: '👦', num1: 34, tens1: 3, ones1: 4, num2: 23, tens2: 2, ones2: 3, studentAnswer: 56, isCorrect: false, correctAnswer: 57, clue: '4 + 3 = 7, not 6!' },
  { student: 'Mia', emoji: '👧', num1: 41, tens1: 4, ones1: 1, num2: 35, tens2: 3, ones2: 5, studentAnswer: 76, isCorrect: true, correctAnswer: 76, clue: 'Tens: 7, Ones: 6. Perfect!' },
  { student: 'Ben', emoji: '👦', num1: 52, tens1: 5, ones1: 2, num2: 16, tens2: 1, ones2: 6, studentAnswer: 67, isCorrect: false, correctAnswer: 68, clue: '2 + 6 = 8, not 7!' },
];

export default function AdditionDetectiveStation({ onComplete, audioEnabled }) {
  const { sounds } = useAudio(audioEnabled);
  const [caseIdx, setCaseIdx] = useState(0);
  const [verdict, setVerdict] = useState(null);
  const [corrInput, setCorrInput] = useState('');
  const [solved, setSolved] = useState(false);
  const [feedback, setFeedback] = useState({ text: '', type: '' });
  const [completedCases, setCompletedCases] = useState([false, false, false]);

  const c = CASES[caseIdx];

  function judge(v) {
    sounds.click();
    setVerdict(v);
    if (v === 'correct') {
      if (c.isCorrect) {
        sounds.correct(); setSolved(true);
        setFeedback({ text: `🔍 Correct! ${c.student}'s work is perfect!`, type: 'success' });
      } else {
        sounds.wrong();
        setFeedback({ text: `❌ Look again! ${c.clue}`, type: 'error' });
      }
    } else {
      if (!c.isCorrect) {
        sounds.correct();
        setFeedback({ text: `🔍 Spot on! ${c.student} made an error. Fix it:`, type: 'success' });
      } else {
        sounds.wrong();
        setFeedback({ text: `❌ Actually correct! Check again.`, type: 'error' });
      }
    }
  }

  function tapCorrKey(n) { sounds.click(); if (corrInput.length < 2) setCorrInput(p => p + String(n)); }
  function clearCorr() { sounds.click(); setCorrInput(''); }

  function verifyFix() {
    if (parseInt(corrInput, 10) === c.correctAnswer) {
      sounds.badge(); setSolved(true);
      setFeedback({ text: `🎉 Correct! The true sum is ${c.correctAnswer}!`, type: 'success' });
    } else {
      sounds.wrong();
      setFeedback({ text: `❌ Not quite! Try again.`, type: 'error' });
    }
  }

  function nextCase() {
    sounds.click();
    const u = [...completedCases]; u[caseIdx] = true; setCompletedCases(u);
    if (caseIdx < 2) {
      setCaseIdx(i => i + 1); setVerdict(null); setCorrInput(''); setSolved(false);
      setFeedback({ text: '', type: '' });
    } else { onComplete(); }
  }

  const showCorrection = verdict === 'has_error' && !c.isCorrect && !solved;

  return (
    <div className="station-wrap theme-detective anim-fade-in">
      <div className="station-header">
        <div className="station-title-group">
          <span className="station-badge">🔍 Station D</span>
          <h3 className="station-title">Addition Inspector</h3>
        </div>
        <div className="station-target-pill">
          <span className="station-target-label">Case:</span>
          <span className="station-target-num">#{caseIdx + 1} {c.emoji} {c.student}</span>
        </div>
      </div>

      {/* Main content area — side by side when correction is showing */}
      <div className={`detective-main ${showCorrection ? 'detective-main--split' : ''}`}>
        {/* Left: Worksheet + Verdict */}
        <div className="detective-left">
          <div className="student-math-paper">
            <div className="math-col-label">TENS</div>
            <div className="math-col-label">ONES</div>
            <div className="math-row"><span className="digit-cell">{c.tens1}</span><span className="digit-cell">{c.ones1}</span></div>
            <div className="math-row"><span className="math-plus">➕</span><span className="digit-cell">{c.tens2}</span><span className="digit-cell">{c.ones2}</span></div>
            <div className="math-line" />
            <div className="math-row"><span className="digit-cell student-res">{Math.floor(c.studentAnswer / 10)}</span><span className="digit-cell student-res">{c.studentAnswer % 10}</span></div>
          </div>

          <div className="student-claim-pill">
            {c.student}: <strong>{c.num1} + {c.num2} = {c.studentAnswer}</strong>
          </div>

          {!solved && (
            <div className="verdict-actions-row">
              <button className={`btn ${verdict === 'correct' ? 'btn-green' : 'btn-outline'}`} onClick={() => judge('correct')}>
                ✅ Correct!
              </button>
              <button className={`btn ${verdict === 'has_error' ? 'btn-primary' : 'btn-outline'}`} onClick={() => judge('has_error')}>
                ❌ Mistake!
              </button>
            </div>
          )}

          {feedback.text && (
            <div className={`machine-feedback-banner ${feedback.type}`}>{feedback.text}</div>
          )}

          {solved && (
            <button className="btn btn-green" onClick={nextCase}
              style={{ minHeight: '38px', padding: '6px 20px', fontSize: '1.02rem', width: '100%' }}>
              {caseIdx < 2 ? '🌟 Next Case →' : '🏆 Complete Lab!'}
            </button>
          )}
        </div>

        {/* Right: Correction keypad — only when needed */}
        {showCorrection && (
          <div className="detective-right anim-slide-up">
            <span className="correction-title">✏️ Correct Sum:</span>
            <div className="correction-display">{corrInput || '_ _'}</div>
            <div className="detective-numrow">
              {[1, 2, 3, 4, 5].map(n => (
                <button key={n} className="det-key" onClick={() => tapCorrKey(n)}>{n}</button>
              ))}
            </div>
            <div className="detective-numrow">
              {[6, 7, 8, 9, 0].map(n => (
                <button key={n} className="det-key" onClick={() => tapCorrKey(n)}>{n}</button>
              ))}
            </div>
            <div className="detective-numrow">
              <button className="det-key det-key--action" onClick={clearCorr}>⌫</button>
              <button className="det-key det-key--submit" onClick={verifyFix} disabled={!corrInput.length}>Check ✓</button>
            </div>
          </div>
        )}
      </div>

      <div className="station-round-dots">
        {CASES.map((_, i) => <span key={i} className={`station-round-dot ${i === caseIdx ? 'active' : ''} ${completedCases[i] ? 'done' : ''}`} />)}
      </div>
    </div>
  );
}
