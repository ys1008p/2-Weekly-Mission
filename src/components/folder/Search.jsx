import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export const Search = ({ setKeyword }) => {
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setKeyword(inputValue);
  }, [inputValue, setKeyword]);

  const handleChange = () => {
    const newValue = inputRef.current.value;
    setInputValue(newValue);
  };

  return (
    <form className='search-bar'>
      <i className='ic-search' aria-hidden></i>
      <input
        ref={inputRef}
        type='search'
        id='mySearch'
        name='q'
        value={inputValue}
        placeholder='링크를 검색해 보세요.'
        aria-label='링크 검색 바'
        onChange={handleChange}
      />
    </form>
  );
};

Search.propTypes = {
  setKeyword: PropTypes.func,
};
