// src/components/shared/Mascot.jsx
import React from 'react';
import './Mascot.css';

export default function Mascot({ mood = 'happy', message, size = 'md' }) {
  const emoji = mood === 'thinking' ? '🦊' : mood === 'curious' ? '🦊' : mood === 'excited' ? '🦊' : '🦊';

  return (
    <div className={`mascot-wrap size-${size}`}>
      <div className="mascot-avatar-circle">
        <span className="mascot-emoji">{emoji}</span>
      </div>
      {message && (
        <div className="mascot-bubble">
          <p className="mascot-speech-text">{message}</p>
        </div>
      )}
    </div>
  );
}
