import './Main.css';
import CardList from './cardList/CardList';
import Tab from '../../components/Tab';
import SearchBar from '../../components/SearchBar';
import MainTitle from '../../components/MainTitle';
import AddFolder from '../../components/AddFolder';

function Main({ 
  className, 
  links, 
  menu, 
  onMouseOver, 
  onMouseOut,
  menuActive,
  handleClick,
  btnOption,
  title }){
  return(
    <div className={className}>
      <SearchBar />
      <Tab 
        menu={menu}
        handleClick={handleClick}  
        menuActive={menuActive}
        btnOption={btnOption}
      />
      <MainTitle 
        title={title}
        btnOption={btnOption}
        menuActive={menuActive}
      />
      <div className="card">
        <ul>
          <CardList 
            links={links} 
            onMouseOver={onMouseOver} 
            onMouseOut={onMouseOut} 
          />
        </ul>
      </div>
      <AddFolder />
    </div>
  )
}

export default Main;