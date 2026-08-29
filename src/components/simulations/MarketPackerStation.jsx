// src/components/simulations/MarketPackerStation.jsx — Redesigned with bakery visuals & animations
import React, { useState } from 'react';
import { useAudio } from '../../hooks/useAudio.js';
import './Stations.css';

const ORDERS = [
  { item1: 'Blueberry Muffins', icon1: '🧁', count1: 31, tens1: 3, ones1: 1, item2: 'Choc Cookies', icon2: '🍪', count2: 26, tens2: 2, ones2: 6, total: 57, tensTotal: 5, onesTotal: 7 },
  { item1: 'Red Apples', icon1: '🍎', count1: 24, tens1: 2, ones1: 4, item2: 'Green Pears', icon2: '🍐', count2: 33, tens2: 3, ones2: 3, total: 57, tensTotal: 5, onesTotal: 7 },
  { item1: 'Strawberry Tarts', icon1: '🍓', count1: 42, tens1: 4, ones1: 2, item2: 'Lemon Cookies', icon2: '🍋', count2: 35, tens2: 3, ones2: 5, total: 77, tensTotal: 7, onesTotal: 7 },
];

export default function MarketPackerStation({ onComplete, audioEnabled }) {
  const { sounds } = useAudio(audioEnabled);
  const [orderIdx, setOrderIdx] = useState(0);
  const [boxes, setBoxes] = useState(0);
  const [singles, setSingles] = useState(0);
  const [completedOrders, setCompletedOrders] = useState([false, false, false]);

  const c = ORDERS[orderIdx];
  const packed = boxes * 10 + singles;
  const isMatch = packed === c.total && boxes === c.tensTotal && singles === c.onesTotal;

  function verify() {
    if (isMatch) {
      sounds.correct();
      const u = [...completedOrders]; u[orderIdx] = true; setCompletedOrders(u);
      if (orderIdx < 2) {
        setTimeout(() => { setOrderIdx(o => o + 1); setBoxes(0); setSingles(0); }, 1200);
      } else { setTimeout(onComplete, 1400); }
    } else { sounds.wrong(); }
  }

  return (
    <div className="station-wrap theme-bakery anim-fade-in">
      <div className="station-header">
        <div className="station-title-group">
          <span className="station-badge">🧁 Station C</span>
          <h3 className="station-title">Bakery Crate Packer</h3>
        </div>
        <div className="station-target-pill">
          <span className="station-target-label">Order:</span>
          <span className="station-target-num">{c.total} items</span>
        </div>
      </div>

      <div className="station-instruction">
        Pack <span className="inst-em">{c.count1} {c.icon1} {c.item1}</span> + <span className="inst-em">{c.count2} {c.icon2} {c.item2}</span> into <span className="inst-green">{c.tensTotal} Boxes of 10</span> and <span className="inst-green">{c.onesTotal} Singles</span>!
      </div>

      <div className="order-clipboard glass-card">
        <div className="order-receipt-row">
          <div className="order-item-pill"><span>{c.icon1} <strong>{c.count1}</strong> ({c.tens1}T, {c.ones1}O)</span></div>
          <span className="receipt-plus">➕</span>
          <div className="order-item-pill"><span>{c.icon2} <strong>{c.count2}</strong> ({c.tens2}T, {c.ones2}O)</span></div>
        </div>
      </div>

      <div className="packer-workspace-grid">
        {/* Boxes of 10 */}
        <div className="packer-bay">
          <div className="bay-header">
            <span className="bay-title">📦 Boxes of 10 ({boxes * 10})</span>
            <div className="bay-btns">
              <button className="btn btn-outline" onClick={() => { sounds.click(); setBoxes(Math.min(boxes + 1, 9)); }} disabled={boxes >= 9}>+ Box 📦</button>
              <button className="btn btn-outline" onClick={() => { sounds.click(); setBoxes(Math.max(boxes - 1, 0)); }} disabled={!boxes}>− Box</button>
            </div>
          </div>
          <div className="bay-items-grid">
            {Array.from({ length: boxes }).map((_, i) => (
              <div key={i} className="pack-box">
                <span className="box-badge">10</span>
                <div className="box-mini-grid">{Array.from({ length: 10 }).map((_, j) => <span key={j} className="box-dot" />)}</div>
              </div>
            ))}
            {!boxes && <span className="empty-bay-msg">Tap "+ Box" to add 10-packs 📦</span>}
          </div>
        </div>

        {/* Singles */}
        <div className="packer-bay">
          <div className="bay-header">
            <span className="bay-title">{c.icon1} Singles ({singles})</span>
            <div className="bay-btns">
              <button className="btn btn-outline" onClick={() => { sounds.click(); setSingles(Math.min(singles + 1, 9)); }} disabled={singles >= 9}>+ 1 {c.icon1}</button>
              <button className="btn btn-outline" onClick={() => { sounds.click(); setSingles(Math.max(singles - 1, 0)); }} disabled={!singles}>− 1</button>
            </div>
          </div>
          <div className="bay-items-grid singles-grid">
            {Array.from({ length: singles }).map((_, i) => <div key={i} className="pack-single">{c.icon1}</div>)}
            {!singles && <span className="empty-bay-msg">Tap "+ 1" to add singles {c.icon1}</span>}
          </div>
        </div>
      </div>

      <div className="packer-live-status">
        Packed: <strong>{boxes} boxes ({boxes * 10}) + {singles} singles = <span style={{ color: isMatch ? '#4ade80' : '#fcd34d' }}>{packed} items</span></strong>
      </div>

      <div className="station-action-bar">
        <button className={`btn ${isMatch ? 'btn-green' : 'btn-primary'}`} onClick={verify} disabled={!packed}>
          {isMatch ? '✅ Deliver Crate!' : '🚚 Verify Crate'}
        </button>
        <button className="btn btn-outline" onClick={() => { sounds.click(); setBoxes(c.tensTotal); setSingles(c.onesTotal); }}>🪄 Auto-Pack</button>
        <button className="btn btn-outline" onClick={() => { setBoxes(0); setSingles(0); }}>↺ Clear</button>
      </div>

      <div className="station-round-dots">
        {ORDERS.map((_, i) => <span key={i} className={`station-round-dot ${i === orderIdx ? 'active' : ''} ${completedOrders[i] ? 'done' : ''}`} />)}
      </div>
    </div>
  );
}
