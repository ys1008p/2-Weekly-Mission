import noImg from '../../../assets/no-img.svg';
import './CardList.css';

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
          <img src= {card.imageSource ? card.imageSource : noImg} alt="카드 이미지" className="img-card" />
        </div>
       
        <div className="card-text">
          <p className="createdAt">
            {DateInfo ({ createdAt : card.createdAt })}
          </p>
          <p className="desc">
            {card.description}
          </p>
          <p className="date">
            {DateText ({ createdAt : card.createdAt })}
          </p>
        </div>
      </a>
    </li>
  ))
  return cards;
}

export default CardList;