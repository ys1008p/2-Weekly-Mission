import SearchIcon from "../assets/Icon_search.svg";
import "../styles/Search.css";

function Search() {
  const searchValue = "검색어를 입력해주세요";
  return (
    <section className="input-structure">
      <div className="input-box">
        <button className="search-button">
          <img src={SearchIcon} alt="searchButton" />
        </button>
        <input className="input" type="text" placeholder={searchValue} />
      </div>
    </section>
  );
}

export default Search;
