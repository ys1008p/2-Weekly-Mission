import './SearchBar.css';
import searchIcon from './Search.svg';
import { useContext } from 'react';
import { SearchContext } from '../../../context/SearchContext';

export default function SearchBar() {
  const { searchValue, setSearchValue } = useContext(SearchContext);

  const handleChangeSearchValue = ({ target }) => {
    setSearchValue(target.value);
  };

  return (
    <div>
      <div className="SearchBarContainer">
        <div className="SearchBar">
          <img className="SearchBarIcon" src={searchIcon}></img>
          <input
            onChange={handleChangeSearchValue}
            value={searchValue}
            className="SearchBarInput"
            placeholder="링크를 검색해 보세요."
          ></input>
        </div>
      </div>
    </div>
  );
}
