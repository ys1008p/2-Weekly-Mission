import '../components/Main_copy.css';
import noImg from '../assets/no-img.svg';

function DateText({ createdAt }){
  const idx = createdAt.indexOf('T');
  const text = createdAt.slice(0, idx);
  return text;
}

 function DateInfo ({ createdAt }){
  const createdDate = new Date(createdAt);
  const today = new Date();
  const result = today - createdDate;
   
  const second = result / 1000;
  const minite = second / 60;
  const hours = minite / 60;
  const date =  hours / 24;
  const year =  date / 30;

  if(minite < 2) return "1 minute ago";
  if(minite < 60) return `${Math.floor(minite)} minutes ago`;
  if(hours < 24) return `${Math.floor(hours)} hours ago`;
  if(date < 30) return `${Math.floor(date)} days ago`;
  if(year < 12) return `${Math.floor(year)} months ago`;
  if(year >= 12) {
    const yearDate = Math.floor(year / 12);
    return yearDate === 1 ? "1 years ago" : `${year} years ago`;
  }
}

function CardList ({ links, onMouseOver, onMouseOut }){
  const cards = links.map((card) => (
    <li key={card.id} 
      onMouseOver={onMouseOver} 
      onMouseOut={onMouseOut}
    >
      <a href={card.url} target="_blank">
        <div className="img-box">
          <img src= {
            card.image_source ? 
            card.image_source : noImg
            } 
            alt="카드 이미지" />
        </div>
       
        <div className="card-text">
          <p className="created-at">
            {DateInfo ({ createdAt : card.created_at })}
          </p>
          <span className="kabab"></span>
          <p className="desc">
            {card.description}
          </p>
          <p className="date">
            {DateText ({ createdAt : card.created_at })}
          </p>
        </div>
      </a>
    </li>
  ))
  return cards;
}

function Main_copy({ className, links, menu, onMouseOver, onMouseOut }){
  return(
    <div className={className}>
      <div className="search">
        <input type="search" placeholder="링크를 검색해 보세요."/>
      </div>
      <div className="tab-menu-wrap">
        <div className="tab-menu">
          <ul>
            <li><a className="active" href="">전체</a></li>
            {menu.map((folder) => (
              <li key={folder.id}>
                <a href="">{folder.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <button type="button" className="btn-add mobile-hide"></button>
      </div>
      <div className="main-wrap">
        <h2 className="main-title">유용한 글</h2>
        <div className="btn-option">
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
    </div>
  )
}

export default Main_copy;