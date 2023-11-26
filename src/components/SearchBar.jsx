import React, { useState } from 'react';
import './SearchBar.css';

export default function SearchBar() {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <input
      className='search'
      type='text'
      value={search}
      onChange={handleChange}
      placeholder='🔍 링크를 검색해 보세요.'
    ></input>
  );
}
