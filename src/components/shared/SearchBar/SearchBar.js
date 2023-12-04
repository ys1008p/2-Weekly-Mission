import './SearchBar.css';
import searchIcon from './Search.svg';
export default function SearchBar() {
  return (
    <div className="SearchBarContainer">
      <div class="SearchBar">
        <img className="SearchBarIcon" src={searchIcon}></img>
        <input className="SearchBarInput" placeholder="링크를 검색해 보세요."></input>
      </div>
    </div>
  );
}
