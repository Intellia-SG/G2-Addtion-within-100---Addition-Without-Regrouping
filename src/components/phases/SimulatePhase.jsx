import { useEffect, useState, useRef } from 'react';
import { useAudio } from '../../hooks/useAudio.js';
import { simulateNarration } from '../../utils/narration.js';

/* ── Station 1: Block Builder ──────────────────────────────────── */
function BlockBuilderStation({ onComplete }) {
  const problem = { a: 23, b: 14, answer: 37 };
  const [tens, setTens]   = useState(0);
  const [ones, setOnes]   = useState(0);
  const [checked, setChecked] = useState(false);
  const [correct, setCorrect] = useState(false);

  const total = tens * 10 + ones;

  function check() {
    const ok = total === problem.answer;
    setChecked(true);
    setCorrect(ok);
    if (ok) setTimeout(onComplete, 1200);
  }

  function reset() { setTens(0); setOnes(0); setChecked(false); setCorrect(false); }

  return (
    <div>
      <h3 className="station-title">🧱 Block Builder</h3>
      <p className="station-instructions">
        Use tens and ones blocks to build {problem.a} + {problem.b}.
        Add enough blocks to show the total!
      </p>

      <div className="addition-display">
        <span>{problem.a}</span>
        <span style={{ color: 'var(--text-muted)', margin: '0 10px' }}>+</span>
        <span>{problem.b}</span>
        <span style={{ color: 'var(--text-muted)', margin: '0 10px' }}>=</span>
        <span style={{ color: total === problem.answer ? 'var(--green)' : 'var(--accent-gold)' }}>
          {total}
        </span>
      </div>

      <div className="blocks-area">
        {/* Tens column */}
        <div className="blocks-group">
          <span className="blocks-label">Tens</span>
          <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end', minHeight: 110 }}>
            {Array.from({ length: tens }).map((_, i) => (
              <div key={i} className="ten-block">
                {Array.from({ length: 10 }).map((_, j) => (
                  <div key={j} className="ten-block-unit" />
                ))}
              </div>
            ))}
          </div>
          <span style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>
            {tens} tens = {tens * 10}
          </span>
        </div>

        <div style={{ fontSize: 28, color: 'var(--accent-gold)', marginBottom: 24, fontFamily: 'var(--font-heading)' }}>+</div>

        {/* Ones column */}
        <div className="blocks-group">
          <span className="blocks-label">Ones</span>
          <div className="blocks-grid" style={{ minHeight: 110, alignContent: 'flex-end' }}>
            {Array.from({ length: ones }).map((_, i) => (
              <div key={i} className="one-block" />
            ))}
          </div>
          <span style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>
            {ones} ones = {ones}
          </span>
        </div>
      </div>

      <div className="block-controls">
        <button className="block-btn tens" onClick={() => setTens(t => Math.min(t + 1, 9))}>
          + Ten
        </button>
        <button className="block-btn tens" onClick={() => setTens(t => Math.max(t - 1, 0))}
          disabled={tens === 0} style={{ opacity: tens === 0 ? 0.4 : 1 }}>
          − Ten
        </button>
        <button className="block-btn ones" onClick={() => setOnes(o => Math.min(o + 1, 9))}>
          + One
        </button>
        <button className="block-btn ones" onClick={() => setOnes(o => Math.max(o - 1, 0))}
          disabled={ones === 0} style={{ opacity: ones === 0 ? 0.4 : 1 }}>
          − One
        </button>
        <button className="block-btn reset-blocks" onClick={reset}>↺ Reset</button>
      </div>

      {!checked && (
        <button className="station-check-btn" onClick={check} disabled={total === 0}>
          Check My Answer!
        </button>
      )}

      {checked && correct && (
        <div className="station-success">
          ✅ Excellent! {problem.a} + {problem.b} = {problem.answer}! You nailed it!
        </div>
      )}
      {checked && !correct && (
        <div style={{
          padding: '14px', background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.3)',
          borderRadius: 12, marginTop: 14, color: '#fca5a5', fontWeight: 700, fontSize: 14
        }}>
          Not quite! You have {total}. You need {problem.answer}. Try adjusting your blocks!
          <button className="station-check-btn" style={{ marginTop: 10 }} onClick={reset}>Try Again</button>
        </div>
      )}
    </div>
  );
}

/* ── Station 2: Place Value Chart ──────────────────────────────── */
function PlaceValueStation({ onComplete }) {
  const problem = { a: 32, b: 15, answer: 47, aTens: 3, aOnes: 2, bTens: 1, bOnes: 5, rTens: 4, rOnes: 7 };
  const [rTens, setRTens] = useState('');
  const [rOnes, setROnes] = useState('');
  const [checked, setChecked] = useState(false);

  function check() {
    setChecked(true);
    if (parseInt(rTens) === problem.rTens && parseInt(rOnes) === problem.rOnes) {
      setTimeout(onComplete, 1200);
    }
  }

  const correct = parseInt(rTens) === problem.rTens && parseInt(rOnes) === problem.rOnes;

  return (
    <div>
      <h3 className="station-title">📊 Place Value Chart</h3>
      <p className="station-instructions">
        Use the place value chart to add {problem.a} + {problem.b}.
        Fill in the missing tens and ones in the answer row!
      </p>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 8, marginBottom: 20 }}>
          <thead>
            <tr>
              <th style={{ color: 'var(--text-muted)', fontSize: 13, fontWeight: 700, padding: '8px 4px', textAlign: 'left' }}>Number</th>
              <th style={{ color: '#818cf8', fontSize: 13, fontWeight: 700, padding: '8px 4px', textAlign: 'center' }}>Tens</th>
              <th style={{ color: 'var(--accent-gold)', fontSize: 13, fontWeight: 700, padding: '8px 4px', textAlign: 'center' }}>Ones</th>
            </tr>
          </thead>
          <tbody>
            {[
              { label: problem.a, tens: problem.aTens, ones: problem.aOnes },
              { label: `+ ${problem.b}`, tens: problem.bTens, ones: problem.bOnes },
            ].map((row, i) => (
              <tr key={i}>
                <td style={{ fontFamily: 'var(--font-heading)', fontSize: 22, color: 'var(--text-primary)', padding: '8px 4px' }}>
                  {row.label}
                </td>
                <td style={{ textAlign: 'center' }}>
                  <div className="pv-cell tens" style={{ padding: '10px 8px' }}>
                    <div className="pv-cell-value">{row.tens}</div>
                  </div>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <div className="pv-cell ones" style={{ padding: '10px 8px' }}>
                    <div className="pv-cell-value">{row.ones}</div>
                  </div>
                </td>
              </tr>
            ))}
            <tr>
              <td style={{ fontFamily: 'var(--font-heading)', fontSize: 22, color: 'var(--accent-gold)', padding: '8px 4px' }}>
                = ?
              </td>
              <td style={{ textAlign: 'center' }}>
                <input
                  className="pv-input"
                  type="number" min="0" max="9"
                  value={rTens}
                  onChange={e => setRTens(e.target.value)}
                  placeholder="?"
                  disabled={checked && correct}
                  style={{
                    border: checked ? (correct ? '2px solid var(--green)' : '2px solid var(--red)') : undefined,
                    maxWidth: 70
                  }}
                />
              </td>
              <td style={{ textAlign: 'center' }}>
                <input
                  className="pv-input"
                  type="number" min="0" max="9"
                  value={rOnes}
                  onChange={e => setROnes(e.target.value)}
                  placeholder="?"
                  disabled={checked && correct}
                  style={{
                    border: checked ? (correct ? '2px solid var(--green)' : '2px solid var(--red)') : undefined,
                    maxWidth: 70
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="pv-equation">
        Tens: {problem.aTens} + {problem.bTens} = <strong>{problem.rTens}</strong>
        &nbsp;·&nbsp; Ones: {problem.aOnes} + {problem.bOnes} = <strong>{problem.rOnes}</strong>
        &nbsp;·&nbsp; Answer: <strong>{problem.answer}</strong>
      </div>

      {(!checked || !correct) && (
        <button className="station-check-btn" onClick={check}
          disabled={rTens === '' || rOnes === ''}>
          Check My Chart!
        </button>
      )}

      {checked && correct && (
        <div className="station-success">
          ✅ Perfect! {problem.a} + {problem.b} = {problem.answer}! Great place value work!
        </div>
      )}
      {checked && !correct && (
        <div style={{ marginTop: 14, color: '#fca5a5', fontWeight: 700, fontSize: 14 }}>
          Not quite — check your tens and ones totals again!
        </div>
      )}
    </div>
  );
}

/* ── Station 3: Column Addition ────────────────────────────────── */
function ColumnAlgorithmStation({ onComplete }) {
  const problems = [
    { a: 23, b: 14, answer: 37 },
    { a: 41, b: 25, answer: 66 },
    { a: 32, b: 55, answer: 87 },
  ];
  const [idx, setIdx]       = useState(0);
  const [answers, setAnswers] = useState(['', '', '']);
  const [checked, setChecked] = useState(false);

  const p = problems[idx];

  function handleChange(e) {
    const v = e.target.value;
    const copy = [...answers];
    copy[idx] = v;
    setAnswers(copy);
    setChecked(false);
  }

  function check() {
    setChecked(true);
    if (parseInt(answers[idx]) === p.answer) {
      setTimeout(() => {
        if (idx < problems.length - 1) {
          setIdx(i => i + 1);
          setChecked(false);
        } else {
          onComplete();
        }
      }, 900);
    }
  }

  const isCorrect = checked && parseInt(answers[idx]) === p.answer;
  const isWrong   = checked && parseInt(answers[idx]) !== p.answer;

  return (
    <div>
      <h3 className="station-title">📝 Column Addition</h3>
      <p className="station-instructions">
        Add using the column method. Write the ones first, then the tens!
        Problem {idx + 1} of {problems.length}
      </p>

      <div className="column-addition">
        <div className="column-row">
          <div className="column-op" />
          <div className="column-digit">{Math.floor(p.a / 10)}</div>
          <div className="column-digit">{p.a % 10}</div>
        </div>
        <div className="column-row">
          <div className="column-op">+</div>
          <div className="column-digit">{Math.floor(p.b / 10)}</div>
          <div className="column-digit">{p.b % 10}</div>
        </div>
        <div className="column-divider" />
        <div className="column-row">
          <div className="column-op" />
          <input
            className={`column-answer-input ${isCorrect ? 'correct-input' : ''} ${isWrong ? 'wrong-input' : ''}`}
            style={{ width: 110 }}
            type="number"
            value={answers[idx]}
            onChange={handleChange}
            placeholder="?"
            disabled={isCorrect}
          />
        </div>
      </div>

      <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 16 }}>
        {problems.map((_, i) => (
          <div
            key={i}
            className={`simulate-progress-dot ${i < idx ? 'done' : i === idx ? '' : ''}`}
            style={{
              background: i < idx ? 'var(--green)' : i === idx ? 'var(--accent-gold)' : 'var(--border-light)'
            }}
          />
        ))}
      </div>

      <button className="station-check-btn" onClick={check}
        disabled={answers[idx] === '' || isCorrect}>
        Check!
      </button>

      {isCorrect && (
        <div className="station-success">
          ✅ Correct! {p.a} + {p.b} = {p.answer}
          {idx < problems.length - 1 ? ' · Next problem loading…' : ' · All done!'}
        </div>
      )}
      {isWrong && (
        <div style={{ marginTop: 12, color: '#fca5a5', fontWeight: 700, fontSize: 14, textAlign: 'center' }}>
          Try again! Remember: ones first, then tens.
        </div>
      )}
    </div>
  );
}

/* ── SimulatePhase wrapper ──────────────────────────────────────── */
const STATIONS = [
  { id: 0, label: '🧱 Block Builder' },
  { id: 1, label: '📊 Place Value' },
  { id: 2, label: '📝 Column' },
];

export default function SimulatePhase({ station, completedStations, audioEnabled, dispatch, onNext }) {
  const { play, stop } = useAudio(audioEnabled);
  const lastSpokenStation = useRef(-1);

  async function speakStation(nextStation) {
    stop();
    const segments = simulateNarration(nextStation);
    for (const segment of segments) {
      const audio = await play(segment.text);
      if (!audio) return;
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
    if (!audioEnabled || lastSpokenStation.current === station) return;
    lastSpokenStation.current = station;
    speakStation(station);
  }, [audioEnabled, station]);

  function handleComplete() {
    dispatch({ type: 'COMPLETE_STATION', payload: station });
    if (station < STATIONS.length - 1) {
      setTimeout(() => {
        lastSpokenStation.current = station + 1;
        speakStation(station + 1);
        dispatch({ type: 'SET_STATION', payload: station + 1 });
      }, 600);
    }
  }

  const allDone = completedStations.length >= STATIONS.length;

  return (
    <div className="simulate-phase">
      <div className="simulate-header">
        <h2 className="simulate-title">🎮 Simulate</h2>
        <p className="simulate-subtitle">Try out 3 interactive stations to master addition!</p>
      </div>

      <div className="station-tabs">
        {STATIONS.map(s => (
          <button
            type="button"
            key={s.id}
            className={`station-tab ${station === s.id ? 'active' : ''} ${completedStations.includes(s.id) ? 'done' : ''}`}
            onClick={() => {
              lastSpokenStation.current = s.id;
              speakStation(s.id);
              dispatch({ type: 'SET_STATION', payload: s.id });
            }}
          >
            <span className="station-tab-badge">
              {completedStations.includes(s.id) ? '✓' : s.id + 1}
            </span>
            <span className="station-tab-copy">
              <span className="station-tab-label">{s.label}</span>
              <span className="station-tab-status">
                {station === s.id ? 'Tap to continue' : completedStations.includes(s.id) ? 'Completed' : 'Tap to start'}
              </span>
            </span>
          </button>
        ))}
      </div>

      <div className="station-content">
        {station === 0 && <BlockBuilderStation onComplete={handleComplete} />}
        {station === 1 && <PlaceValueStation   onComplete={handleComplete} />}
        {station === 2 && <ColumnAlgorithmStation onComplete={handleComplete} />}
      </div>

      {allDone && (
        <button className="simulate-next-btn" onClick={onNext}>
          🏆 Go to Play! →
        </button>
      )}

      {!allDone && completedStations.includes(station) && station < 2 && (
        <button className="simulate-next-btn"
          onClick={() => dispatch({ type: 'SET_STATION', payload: station + 1 })}>
          Next Station →
        </button>
      )}
    </div>
  );
}
