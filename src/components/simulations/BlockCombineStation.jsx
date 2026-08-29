// src/components/simulations/BlockCombineStation.jsx — Redesigned with rich visuals & animations
import React, { useState } from 'react';
import { useAudio } from '../../hooks/useAudio.js';
import './Stations.css';

const ROUNDS = [
  { num1: 24, tens1: 2, ones1: 4, num2: 13, tens2: 1, ones2: 3, sum: 37 },
  { num1: 32, tens1: 3, ones1: 2, num2: 25, tens2: 2, ones2: 5, sum: 57 },
  { num1: 41, tens1: 4, ones1: 1, num2: 36, tens2: 3, ones2: 6, sum: 77 },
];

export default function BlockCombineStation({ onComplete, audioEnabled }) {
  const { sounds } = useAudio(audioEnabled);
  const [roundIdx, setRoundIdx] = useState(0);
  const [t1, setT1] = useState(0);
  const [o1, setO1] = useState(0);
  const [t2, setT2] = useState(0);
  const [o2, setO2] = useState(0);
  const [combined, setCombined] = useState(false);
  const [verified, setVerified] = useState(false);
  const [completedRounds, setCompletedRounds] = useState([false, false, false]);

  const c = ROUNDS[roundIdx];
  const built1 = t1 === c.tens1 && o1 === c.ones1;
  const built2 = t2 === c.tens2 && o2 === c.ones2;
  const bothBuilt = built1 && built2;
  const totalT = t1 + t2;
  const totalO = o1 + o2;
  const total = totalT * 10 + totalO;

  function combine() { sounds.click(); setCombined(true); }

  function verify() {
    if (total === c.sum) {
      sounds.correct();
      setVerified(true);
      const u = [...completedRounds]; u[roundIdx] = true; setCompletedRounds(u);
      if (roundIdx < 2) {
        setTimeout(() => { setRoundIdx(r => r + 1); setT1(0); setO1(0); setT2(0); setO2(0); setCombined(false); setVerified(false); }, 1200);
      } else { setTimeout(onComplete, 1400); }
    } else { sounds.wrong(); }
  }

  function reset() { sounds.click(); setT1(0); setO1(0); setT2(0); setO2(0); setCombined(false); setVerified(false); }
  function quickFill() { sounds.click(); setT1(c.tens1); setO1(c.ones1); setT2(c.tens2); setO2(c.ones2); }

  return (
    <div className="station-wrap theme-blocks anim-fade-in">
      <div className="station-header">
        <div className="station-title-group">
          <span className="station-badge">🧱 Station A</span>
          <h3 className="station-title">Block Builder Arena</h3>
        </div>
        <div className="station-target-pill">
          <span className="station-target-label">Mission:</span>
          <span className="station-target-num">{c.num1} + {c.num2} = {c.sum}</span>
        </div>
      </div>

      <div className="station-instruction">
        {!combined
          ? <>Build <span className="inst-em">{c.num1}</span> and <span className="inst-em">{c.num2}</span> using 🟧 <span className="inst-em">Tens rods</span> and 🟩 <span className="inst-green">Ones cubes</span>, then <span className="inst-em">Combine!</span></>
          : <>Watch tens and ones join together! Total = <span className="inst-green">{total}</span></>
        }
      </div>

      <div className="station-equation-bar">
        <span className="eq-term">{c.num1}</span>
        <span className="eq-op">➕</span>
        <span className="eq-term">{c.num2}</span>
        <span className="eq-op">=</span>
        <span className="eq-target">{combined ? total : '❓'}</span>
      </div>

      {!combined ? (
        <div className="builder-trays-grid">
          {/* Tray 1 */}
          <div className={`builder-tray ${built1 ? 'tray-ready' : ''}`}>
            <div className="tray-top">
              <span className="tray-label">1st: {c.num1}</span>
              <span className={`tray-status ${built1 ? '' : 'pending'}`}>
                {built1 ? '✅ Ready!' : `Need ${c.tens1}T ${c.ones1}O`}
              </span>
            </div>
            <div className="tray-blocks-area">
              <div className="blocks-column">
                <span className="col-tag">🟧 Tens: {t1}</span>
                <div className="blocks-flex">
                  {Array.from({ length: t1 }).map((_, i) => <div key={i} className="sim-ten-rod" />)}
                </div>
              </div>
              <div className="blocks-column">
                <span className="col-tag">🟩 Ones: {o1}</span>
                <div className="blocks-ones-grid">
                  {Array.from({ length: o1 }).map((_, i) => <div key={i} className="sim-one-cube" />)}
                </div>
              </div>
            </div>
            <div className="tray-controls">
              <button className="btn btn-outline" onClick={() => { sounds.click(); setT1(Math.min(t1 + 1, 9)); }}>+10 🟧</button>
              <button className="btn btn-outline" onClick={() => { sounds.click(); setT1(Math.max(t1 - 1, 0)); }} disabled={!t1}>−10</button>
              <button className="btn btn-outline" onClick={() => { sounds.click(); setO1(Math.min(o1 + 1, 9)); }}>+1 🟩</button>
              <button className="btn btn-outline" onClick={() => { sounds.click(); setO1(Math.max(o1 - 1, 0)); }} disabled={!o1}>−1</button>
            </div>
          </div>

          {/* Tray 2 */}
          <div className={`builder-tray ${built2 ? 'tray-ready' : ''}`}>
            <div className="tray-top">
              <span className="tray-label">2nd: {c.num2}</span>
              <span className={`tray-status ${built2 ? '' : 'pending'}`}>
                {built2 ? '✅ Ready!' : `Need ${c.tens2}T ${c.ones2}O`}
              </span>
            </div>
            <div className="tray-blocks-area">
              <div className="blocks-column">
                <span className="col-tag">🟧 Tens: {t2}</span>
                <div className="blocks-flex">
                  {Array.from({ length: t2 }).map((_, i) => <div key={i} className="sim-ten-rod" />)}
                </div>
              </div>
              <div className="blocks-column">
                <span className="col-tag">🟩 Ones: {o2}</span>
                <div className="blocks-ones-grid">
                  {Array.from({ length: o2 }).map((_, i) => <div key={i} className="sim-one-cube" />)}
                </div>
              </div>
            </div>
            <div className="tray-controls">
              <button className="btn btn-outline" onClick={() => { sounds.click(); setT2(Math.min(t2 + 1, 9)); }}>+10 🟧</button>
              <button className="btn btn-outline" onClick={() => { sounds.click(); setT2(Math.max(t2 - 1, 0)); }} disabled={!t2}>−10</button>
              <button className="btn btn-outline" onClick={() => { sounds.click(); setO2(Math.min(o2 + 1, 9)); }}>+1 🟩</button>
              <button className="btn btn-outline" onClick={() => { sounds.click(); setO2(Math.max(o2 - 1, 0)); }} disabled={!o2}>−1</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="combined-tray anim-slide-up">
          <h4 className="combined-title">✨ Tens &amp; Ones Combined!</h4>
          <div className="combined-breakdown-row">
            <div className="breakdown-box">
              <span className="breakdown-title">🟧 All Tens Together</span>
              <div className="blocks-flex">{Array.from({ length: totalT }).map((_, i) => <div key={i} className="sim-ten-rod" />)}</div>
              <span className="breakdown-sum">{t1} + {t2} = <strong>{totalT} tens ({totalT * 10})</strong></span>
            </div>
            <div className="breakdown-op">➕</div>
            <div className="breakdown-box">
              <span className="breakdown-title">🟩 All Ones Together</span>
              <div className="blocks-ones-grid">{Array.from({ length: totalO }).map((_, i) => <div key={i} className="sim-one-cube" />)}</div>
              <span className="breakdown-sum">{o1} + {o2} = <strong>{totalO} ones</strong></span>
            </div>
          </div>
          <div className="combined-grand-total">
            Total: {totalT * 10} + {totalO} = <strong style={{ color: '#4ade80', fontSize: '120%' }}>{total}</strong>
          </div>
        </div>
      )}

      <div className="station-action-bar">
        {!combined ? (
          <>
            <button className="btn btn-primary" onClick={combine} disabled={!bothBuilt}>⚡ Combine Blocks!</button>
            <button className="btn btn-outline" onClick={quickFill}>🪄 Quick Fill</button>
            <button className="btn btn-outline" onClick={reset}>↺ Reset</button>
          </>
        ) : (
          <>
            <button className="btn btn-green" onClick={verify} disabled={verified}>{verified ? '✅ Verified!' : '✨ Verify Sum!'}</button>
            <button className="btn btn-outline" onClick={() => setCombined(false)}>← Rebuild</button>
          </>
        )}
      </div>

      <div className="station-round-dots">
        {ROUNDS.map((_, i) => <span key={i} className={`station-round-dot ${i === roundIdx ? 'active' : ''} ${completedRounds[i] ? 'done' : ''}`} />)}
      </div>
    </div>
  );
}
