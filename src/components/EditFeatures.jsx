import React from 'react';
import ShareImg from '../images/share.svg';
import PenImg from '../images/pen.svg';
import DeleteImg from '../images/trash.svg';
import styles from './EditFeatures.module.css';

export default function EditFeatures() {
  return (
    <div className={styles.features}>
      <button className={styles.feature}>
        <img src={ShareImg} alt='폴더 공유' />
        공유
      </button>
      <button className={styles.feature}>
        <img src={PenImg} alt='폴더 이름 변경' />
        이름 변경
      </button>
      <button className={styles.feature}>
        <img src={DeleteImg} alt='폴더 삭제' />
        삭제
      </button>
    </div>
  );
}
