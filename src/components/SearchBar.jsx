import React, { useState } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar() {
  const [search, setSearch] = useState('');

  return (
    <input
      className={styles.search}
      type='text'
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
      }}
      placeholder='🔍 링크를 검색해 보세요.'
    />
  );
}
