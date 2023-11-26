import Search from '../img/Search.jpg'
import '../styles/SearchBar.css'

const SearchBar = () => {
  return(
  <section className='searchSection'>
    <img src={Search} alt='검색 돋보기' className='searchImg'/>
    <input className='searchBar' placeholder="링크를 검색해 보세요"></input>
    
    
  </section>
  )
}

export default SearchBar