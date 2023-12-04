import './Main.css';
import CardList from './cardList/CardList';
import Tab from '../../components/Tab';
import SearchBar from '../../components/SearchBar';
import BtnOption from '../../components/btnOption/BtnOption';

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
      <div className="tab-menu-wrap">
        <div className="tab-menu">
          <ul>
            <Tab 
              menu={menu}
              handleClick={handleClick}  
              menuActive={menuActive}
              btnOption={btnOption}
            />
          </ul>
        </div>
        {/* <button type="button" className="btn-add mobile-hide"></button> */}
      </div>
      <div className="main-wrap">
        <h2 className="main-title">
          {title}
        </h2>
        <BtnOption 
          btnOption={btnOption}
          menuActive={menuActive}
        />
      </div>
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