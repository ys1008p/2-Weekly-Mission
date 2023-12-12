import { useState } from 'react';

export const Search = () => {
  const [input, setInput] = useState('');

  return (
    <form className='search-bar'>
      <i className='ic-search' aria-hidden></i>
      <input
        type='search'
        id='mySearch'
        name='q'
        value={input}
        placeholder='링크를 검색해 보세요.'
        aria-label='링크 검색 바'
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
};
