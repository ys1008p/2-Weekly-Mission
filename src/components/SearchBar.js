import searchIcon from '../assets/searchIcon.svg';
import '../styles/SearchBar.css'

const SearchBar = () => {
  return(
    <section className="search--section">
      <div className='search-bar--container'>
        <div className='search-bar-placeholder--container'>
          <img src={searchIcon} alt='search icon' className='search--icon'></img>
          <p className='search-bar-placeholder'>링크를 검색해 보세요.</p>
        </div>
        <input className="search-bar" disabled></input>
      </div>
    </section>
  )
};

export default SearchBar;
