import searchIcon from "../assets/searchIcon.svg";
import "../styles/SearchBar.css";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <form>
        <input
          name="search"
          type="search"
          placeholder="링크를 검색해 보세요."
        />
        <img src={searchIcon} alt="searchIcon" />
      </form>
    </div>
  );
};

export { SearchBar };
