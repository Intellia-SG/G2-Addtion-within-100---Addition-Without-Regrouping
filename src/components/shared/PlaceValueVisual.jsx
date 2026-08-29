// src/components/shared/PlaceValueVisual.jsx
import React from 'react';
import './PlaceValueVisual.css';

export default function PlaceValueVisual({ data, compact = false }) {
  if (!data) return null;
  const { num1, tens1 = 0, ones1 = 0, num2, tens2 = 0, ones2 = 0, sum } = data;

  return (
    <div className={`pv-visual-wrap ${compact ? 'compact' : ''}`}>
      {/* Addend 1 Box */}
      <div className="pv-box">
        <div className="pv-header">
          <span className="pv-num">{num1}</span>
          <span className="pv-sub">({tens1} tens, {ones1} ones)</span>
        </div>
        <div className="pv-blocks">
          <div className="pv-col tens">
            {Array.from({ length: tens1 }).map((_, i) => (
              <div key={i} className="ten-rod" title="1 Ten (10)">
                {Array.from({ length: 10 }).map((_, j) => (
                  <div key={j} className="unit-cube-inline" />
                ))}
              </div>
            ))}
          </div>
          <div className="pv-col ones">
            {Array.from({ length: ones1 }).map((_, i) => (
              <div key={i} className="one-cube" title="1 One (1)" />
            ))}
          </div>
        </div>
      </div>

      {/* Operator */}
      <div className="pv-operator">➕</div>

      {/* Addend 2 Box */}
      <div className="pv-box">
        <div className="pv-header">
          <span className="pv-num">{num2}</span>
          <span className="pv-sub">({tens2} tens, {ones2} ones)</span>
        </div>
        <div className="pv-blocks">
          <div className="pv-col tens">
            {Array.from({ length: tens2 }).map((_, i) => (
              <div key={i} className="ten-rod" title="1 Ten (10)">
                {Array.from({ length: 10 }).map((_, j) => (
                  <div key={j} className="unit-cube-inline" />
                ))}
              </div>
            ))}
          </div>
          <div className="pv-col ones">
            {Array.from({ length: ones2 }).map((_, i) => (
              <div key={i} className="one-cube" title="1 One (1)" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
