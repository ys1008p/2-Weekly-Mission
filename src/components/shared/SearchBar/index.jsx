import './SearchBar.css';
import searchIcon from './Search.svg';
import closeIcon from './_close.png';
import { useContext, useEffect } from 'react';
import { SearchContext } from '../../../context/SearchContext';

export default function SearchBar({ filterLinks, setFilteredLinks }) {
  const { searchValue, setSearchValue } = useContext(SearchContext);

  const handleChangeSearchValue = ({ target }) => {
    setSearchValue(target.value);
  };

  useEffect(() => {
    setFilteredLinks(filterLinks(searchValue));
  }, [searchValue]);

  return (
    <div className="SearchBarContainer">
      <div className="SearchBar">
        <img className="SearchBarIcon" src={searchIcon}></img>
        <input
          onChange={handleChangeSearchValue}
          value={searchValue}
          className="SearchBarInput"
          placeholder="링크를 검색해 보세요."
        ></input>
        <button
          onClick={() => {
            setSearchValue('');
          }}
        >
          <img className="SearchBarResetIcon" src={closeIcon} />
        </button>
      </div>
    </div>
  );
}
