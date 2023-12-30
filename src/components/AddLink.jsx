import React, { useState } from 'react';
import CTA from './CTA';
import styles from './AddLink.module.css';

export default function AddLink() {
  const [url, setUrl] = useState('');
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type='url'
        value={url}
        onChange={(e) => {
          setUrl(e.target.value);
        }}
        placeholder='🔗 링크를 추가해 보세요.'
      />
      <CTA text='추가하기' className='fixedWidth' />
    </form>
  );
}
