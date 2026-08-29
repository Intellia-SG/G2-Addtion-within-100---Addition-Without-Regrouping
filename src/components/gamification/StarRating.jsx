// src/components/gamification/StarRating.jsx
import React from 'react';

export default function StarRating({ stars = 0, size = 'md' }) {
  const starSize = size === 'sm' ? '0.9rem' : size === 'lg' ? '1.6rem' : '1.25rem';
  return (
    <div style={{ display: 'inline-flex', gap: '3px', alignItems: 'center' }}>
      {[1, 2, 3].map((s) => (
        <span
          key={s}
          style={{
            fontSize: starSize,
            color: s <= stars ? '#ffc107' : 'rgba(255, 255, 255, 0.2)',
            filter: s <= stars ? 'drop-shadow(0 0 4px rgba(255, 193, 7, 0.6))' : 'none',
            transition: 'all 0.2s ease',
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}
