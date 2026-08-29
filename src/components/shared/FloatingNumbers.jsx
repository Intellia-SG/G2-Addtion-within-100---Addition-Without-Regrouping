// src/components/shared/FloatingNumbers.jsx
import React, { useMemo } from 'react';
import './FloatingNumbers.css';

const SYMBOLS = ['➕', '🔟', '24', '35', '59', '72', '88', '=', '13', '46', '67', '✨'];

export default function FloatingNumbers() {
  const items = useMemo(() => {
    return Array.from({ length: 14 }, (_, i) => ({
      id: i,
      symbol: SYMBOLS[i % SYMBOLS.length],
      left: `${(i * 7.5 + 3) % 92}%`,
      animDelay: `${(i * 1.3) % 8}s`,
      animDuration: `${12 + (i % 6) * 3}s`,
      fontSize: `${1.1 + (i % 3) * 0.45}rem`,
      opacity: 0.08 + (i % 3) * 0.04,
    }));
  }, []);

  return (
    <div className="floating-numbers-container" aria-hidden="true">
      {items.map((item) => (
        <span
          key={item.id}
          className="floating-item"
          style={{
            left: item.left,
            animationDelay: item.animDelay,
            animationDuration: item.animDuration,
            fontSize: item.fontSize,
            opacity: item.opacity,
          }}
        >
          {item.symbol}
        </span>
      ))}
    </div>
  );
}
