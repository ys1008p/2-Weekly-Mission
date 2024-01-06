import React from 'react';
import styles from './AddLinkHeader.module.css';

export default function AddLinkHeader({ refs, className, children }) {
  return (
    <div className={styles[`${className}`]} ref={refs}>
      {children}
    </div>
  );
}
