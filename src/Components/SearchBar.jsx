import search from "../images/search.svg";
import "../css/SearchBar.css";

function SearchBar() {
  return (
    <div className="searchBar">
      <input type="search" placeholder="링크를 검색해 보세요" />
      <img src={search} alt="돋보기" />
    </div>
  );
}

export default SearchBar;
