import searchIcon from '../assets/searchIcon.svg';
import style from '../styles/SearchBar.module.css';

const SearchBar = () => {
  return(
    <section className={`${style['search--section']}`}>
      <div className={`${style['search-bar--container']}`}>
        <div className={`${style['search-bar-placeholder--container']}`}>
          <img src={searchIcon} alt='search icon' className={`${style['search--icon']}`}></img>
          <p className={`${style['search-bar-placeholder']}`}>링크를 검색해 보세요.</p>
        </div>
        <input className={`${style['search-bar']}`} disabled></input>
      </div>
    </section>
  )
};

export default SearchBar;
