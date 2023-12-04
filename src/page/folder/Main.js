import './Main.css';
import CardList from './cardList/CardList';
import Tab from '../../components/Tab';
import SearchBar from '../../components/SearchBar';
import MainTitle from '../../components/MainTitle';

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
      <div>
        <button type="button" className="btn-add-folder"></button>
      </div>
    </div>
  )
}

export default Main;