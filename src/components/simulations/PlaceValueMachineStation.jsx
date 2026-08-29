// src/components/simulations/PlaceValueMachineStation.jsx — Redesigned with visual column machine
import React, { useState } from 'react';
import { useAudio } from '../../hooks/useAudio.js';
import './Stations.css';

const ROUNDS = [
  { num1: 42, tens1: 4, ones1: 2, num2: 15, tens2: 1, ones2: 5, tensCount: 5, onesSum: 7, total: 57 },
  { num1: 53, tens1: 5, ones1: 3, num2: 32, tens2: 3, ones2: 2, tensCount: 8, onesSum: 5, total: 85 },
  { num1: 61, tens1: 6, ones1: 1, num2: 27, tens2: 2, ones2: 7, tensCount: 8, onesSum: 8, total: 88 },
];

export default function PlaceValueMachineStation({ onComplete, audioEnabled }) {
  const { sounds } = useAudio(audioEnabled);
  const [roundIdx, setRoundIdx] = useState(0);
  const [onesInput, setOnesInput] = useState('');
  const [tensInput, setTensInput] = useState('');
  const [step, setStep] = useState(1);
  const [feedback, setFeedback] = useState({ text: '', type: '' });
  const [completedRounds, setCompletedRounds] = useState([false, false, false]);

  const c = ROUNDS[roundIdx];

  function tapKey(n) {
    sounds.click();
    if (step === 1) setOnesInput(String(n));
    else if (step === 2) setTensInput(String(n));
  }

  function checkStep() {
    if (step === 1) {
      if (parseInt(onesInput, 10) === c.onesSum) {
        sounds.correct();
        setFeedback({ text: '✅ Ones column correct!', type: 'success' });
        setTimeout(() => { setStep(2); setFeedback({ text: '', type: '' }); }, 900);
      } else {
        sounds.wrong();
        setFeedback({ text: `❌ Try again! ${c.ones1} + ${c.ones2} = ?`, type: 'error' });
      }
    } else if (step === 2) {
      const v = parseInt(tensInput, 10);
      if (v === c.tensCount || v === c.tensCount * 10) {
        sounds.correct();
        setFeedback({ text: '✅ Tens column correct!', type: 'success' });
        setTimeout(() => { setStep(3); setFeedback({ text: '', type: '' }); }, 900);
      } else {
        sounds.wrong();
        setFeedback({ text: `❌ Try again! ${c.tens1} + ${c.tens2} = ? tens`, type: 'error' });
      }
    }
  }

  function lockIn() {
    sounds.badge();
    const u = [...completedRounds]; u[roundIdx] = true; setCompletedRounds(u);
    if (roundIdx < 2) {
      setTimeout(() => { setRoundIdx(r => r + 1); setStep(1); setOnesInput(''); setTensInput(''); setFeedback({ text: '', type: '' }); }, 1100);
    } else { setTimeout(onComplete, 1300); }
  }

  return (
    <div className="station-wrap theme-columns anim-fade-in">
      <div className="station-header">
        <div className="station-title-group">
          <span className="station-badge">📊 Station B</span>
          <h3 className="station-title">Column Splitter Machine</h3>
        </div>
        <div className="station-target-pill">
          <span className="station-target-label">Mission:</span>
          <span className="station-target-num">{c.num1} + {c.num2} = {c.total}</span>
        </div>
      </div>

      <div className="station-instruction">
        {step === 1 && <>👉 <span className="inst-em">Step 1:</span> Add the <span className="inst-green">Ones column</span> first! What is <span className="inst-em">{c.ones1} + {c.ones2}</span>?</>}
        {step === 2 && <>👉 <span className="inst-em">Step 2:</span> Now add the <span className="inst-em">Tens column!</span> What is <span className="inst-em">{c.tens1} + {c.tens2}</span> tens?</>}
        {step === 3 && <>🎉 <span className="inst-em">Step 3:</span> Combine! {c.tensCount * 10} + {c.onesSum} = <span className="inst-green">{c.total}</span> — No regrouping needed!</>}
      </div>

      <div className="machine-board glass-card">
        <div className="machine-columns-grid">
          <div className="m-col-header tens-header">TENS (10s)</div>
          <div className="m-col-header ones-header">ONES (1s)</div>

          <div className="m-cell"><span className="digit-large">{c.tens1}</span><span className="digit-sub">({c.tens1 * 10})</span></div>
          <div className="m-cell"><span className="digit-large">{c.ones1}</span></div>

          <div className="m-cell"><span className="m-op-badge">➕</span><span className="digit-large">{c.tens2}</span><span className="digit-sub">({c.tens2 * 10})</span></div>
          <div className="m-cell"><span className="digit-large">{c.ones2}</span></div>

          <div className="m-divider-bar" />

          <div className={`m-cell result-cell ${step === 2 ? 'active-step-cell' : ''}`}>
            <span className="digit-large" style={{ color: '#fcd34d' }}>
              {step >= 3 ? c.tensCount : tensInput || (step === 2 ? '❓' : '—')}
            </span>
            {step >= 3 && <span className="digit-sub">({c.tensCount * 10})</span>}
          </div>
          <div className={`m-cell result-cell ${step === 1 ? 'active-step-cell' : ''}`}>
            <span className="digit-large" style={{ color: '#4ade80' }}>
              {step >= 2 ? c.onesSum : onesInput || '❓'}
            </span>
          </div>
        </div>

        {feedback.text && (
          <div className={`machine-feedback-banner ${feedback.type} anim-slide-up`}>{feedback.text}</div>
        )}

        {step < 3 ? (
          <div className="machine-keypad-section">
            <div className="keypad-grid">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => (
                <button key={n} className="keypad-btn" onClick={() => tapKey(n)}>{n}</button>
              ))}
            </div>
            <button className="btn btn-primary" onClick={checkStep}
              disabled={step === 1 ? !onesInput : !tensInput}
              style={{ minHeight: '38px', padding: '6px 22px', fontSize: '1.05rem' }}>
              Check {step === 1 ? 'Ones' : 'Tens'} →
            </button>
          </div>
        ) : (
          <button className="btn btn-green anim-bounce-in" onClick={lockIn}
            style={{ minHeight: '42px', padding: '8px 24px', fontSize: '1.1rem' }}>
            🌟 Lock in {c.total} &amp; Continue!
          </button>
        )}
      </div>

      <div className="station-round-dots">
        {ROUNDS.map((_, i) => <span key={i} className={`station-round-dot ${i === roundIdx ? 'active' : ''} ${completedRounds[i] ? 'done' : ''}`} />)}
      </div>
    </div>
  );
}
