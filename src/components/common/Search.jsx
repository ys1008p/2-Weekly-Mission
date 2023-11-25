import { useState } from 'react';

export const Search = () => {
  const [input, setInput] = useState('');
  const onChangeSearchInput = (e) => {
    setInput(e.target.value);
  };

  console.log(input);

  return (
    <form className='search-bar'>
      <i className='ic-search' aria-hidden></i>
      <input
        type='text'
        placeholder='링크를 검색해 보세요.'
        onChange={onChangeSearchInput}
      />
    </form>
  );
};
