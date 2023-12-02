import searchIcon from "../../images/search.svg";

function Search() {
  return (
    <div className="search-box">
      <div className="search-section">
        <img className="search-icon" src={searchIcon} alt="돋보기 아이콘" />
        <input className="search" placeholder="링크를 검색해 보세요." />
      </div>
      <div className="search-erase">X</div>
    </div>
  );
}

export default Search;
