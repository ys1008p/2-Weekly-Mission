import React, { useState } from 'react';
import CloseImg from '../images/close.svg';
import styles from './SearchBar.module.css';

export default function SearchBar({ search, setSearch }) {
  return (
    <div className={styles.container}>
      <input
        className={styles.search}
        type='text'
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder='🔍 링크를 검색해 보세요.'
      />
      {search && (
        <button onClick={() => setSearch('')}>
          <img className={styles.closeImage} src={CloseImg} alt='입력한 검색어를 모두 삭제하는 엑스모양 아이콘' />
        </button>
      )}
    </div>
  );
}
