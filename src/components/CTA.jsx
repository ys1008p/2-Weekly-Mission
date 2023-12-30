import React from 'react';
import './CTA.css';

export default function CTA({ text, className }) {
  return <div className={`button ${className}`}>{text}</div>;
}
