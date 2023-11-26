import Search from "../assets/Search.svg";
import "./SearchBar.css";
export function SearchBar() {
  return (
    <>
      <input
        className="search-bar-input"
        type="text"
        placeholder="링크를 검색해 보세요."
      />
      {/* <img src={Search} /> */}
    </>
  );
}

export default SearchBar;
