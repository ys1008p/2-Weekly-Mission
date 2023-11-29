import './SearchBar.css';
import SearchIcon from '../../../assets/Search.svg';
export default function SearchBar() {
  return (
    <form className="SearchBar">
      <input className="SearchBar-input" placeholder="링크를 검색해 보세요." />
      <img src={SearchIcon} alt="검색 아이콘" className="SearchBar-icon" />
    </form>
  );
}
