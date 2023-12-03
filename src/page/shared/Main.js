import CardList from './cardList/CardList';
import SearchBar from '../../components/searchBar/SearchBar';

function Main({ className, links, onMouseOver, onMouseOut }){
  return(
    <div className={className}>
      <SearchBar />
      <div className="card">
        <ul>
          <CardList 
            links={links} 
            onMouseOver={onMouseOver} 
            onMouseOut={onMouseOut} 
          />
        </ul>
      </div>
    </div>
  )
}

export default Main;