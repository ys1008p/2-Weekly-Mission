import React from 'react';
import styles from './AddLinkHeader.module.css';

export default function AddLinkHeader({ children }) {
  return <div className={styles.background}>{children}</div>;
}
