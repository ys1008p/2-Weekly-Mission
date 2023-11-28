import "../css/Search.css";
import magnifier from "../assets/magnifier.png";

function Search() {
  return (
    <div className="search">
      <form action="" className="search-form">
        <img src={magnifier} alt="magnifier" />
        <input type="text" placeholder="링크를 검색해보세요" name="search" />
      </form>
    </div>
  );
}

export default Search;
