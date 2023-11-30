import searchIcon from "../assets/Search.png";

function SearchBar() {
  return (
    <section className="search-bar">
      <div className="search-bar-container">
        <img src={searchIcon} alt="검색 아이콘" />
        <input className="searchBar" placeholder="링크로 검색해 보세요." />
      </div>
    </section>
  );
}

export default SearchBar;
