import React from 'react';
import './CTA.css';

export default function CTA({ text, className, handleButtonClick }) {
  return (
    <button className={`button ${className}`} onClick={handleButtonClick}>
      {text}
    </button>
  );
}
