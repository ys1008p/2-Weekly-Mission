import './Main.css';
import CardList from './cardList/CardList';
import TabMenu from '../../components/tabMenu/TabMenu';
import SearchBar from '../../components/searchBar/SearchBar';

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
            <TabMenu 
              menu={menu}
              handleClick={handleClick}  
              menuActive={menuActive}
              btnOption={btnOption}
            />
          </ul>
        </div>
        <button type="button" className="btn-add mobile-hide"></button>
      </div>
      <div className="main-wrap">
        <h2 className="main-title">
          {title}
        </h2>
        <div className={`btn-option ${btnOption === true && menuActive !== "all" ? "active" : ""}`}>
          <button type="button" className="btn-shared">공유</button>
          <button type="button" className="btn-change-name">이름 변경</button>
          <button type="button" className="btn-delete">삭제</button>
        </div>
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