import searchIcon from "../assets/Icon_search.svg"
import "../styles/Search.css";

function Search() {
  const inputPlaceHolder = "링크를 검색해주세요";
  const inputIcon = searchIcon;
  

  
  return (
    <section className="input-structure">
      <div className="input-box">
      <form className="search-box">
      <img src={inputIcon} alt="searchButton" />
        <input className="input" type="text" placeholder={inputPlaceHolder} />
        </form>
      
       
      </div>
    </section>
  );
}

export default Search;
