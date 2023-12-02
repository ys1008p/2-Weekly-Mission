import search from "../assets/search.svg";
const SearchBar = () => {
  return (
    <div className="input-wrapper">
      <input className type="text" name="search" placeholder="링크를 검색해 보세요." />
      <button type="submit">
        <img id="search-icon" src={search} alt="돋보기 아이콘" />
      </button>
    </div>
  );
};

export default SearchBar;
