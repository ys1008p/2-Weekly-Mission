import React, { useState } from 'react';
import './SearchBar.css';

export default function SearchBar() {
  const [search, setSearch] = useState('');

  return (
    <input
      className='search'
      type='text'
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
      }}
      placeholder='🔍 링크를 검색해 보세요.'
    />
  );
}
