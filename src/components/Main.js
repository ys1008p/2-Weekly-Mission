import '../components/Main.css';
import noImg from '../assets/no-img.svg';

// 년, 월, 일만 보이게 하기
function DateText({ createdAt }){
  const idx = createdAt.indexOf('T');
  const text = createdAt.slice(0, idx);
  return text;
}

 // 현재 날짜와 데이터에 있는 날짜에 따른 시간 정보 보여주기
 function DateInfo ({ createdAt }){
  const createdDate = new Date(createdAt);
  const today = new Date();
  const result = today - createdDate;

  const minite = Math.floor(result / (1000 * 60));
  const hours = Math.floor(result / (1000 * 60 * 60));
  const date = Math.floor(result / (1000 * 60 * 60 * 24));
  const year = Math.floor(result / (1000 * 60 * 60 * 24 * 30));

  if(minite < 2) return "1 minute ago";
  if(minite < 60) return `${minite} minutes ago`;
  if(hours < 24) return `${hours} hours ago`;
  if(date < 30) return `${date} days ago`;
  if(year < 12) return `${year} months ago`;
  if(year >= 12) {
    const yearDate = Math.floor(year / 12);
    return yearDate === 1 ? "1 years ago" : `${year} years ago`;
  }
}

function Main({ className, links, onMouseOver, onMouseOut }){
  return(
    <div className={className}>
      <div className="search">
        <input type="search" placeholder="링크를 검색해 보세요."/>
      </div>
      <div className="card">
        <ul>
          {links.map((card) => (
            <li key={card.id} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
              <a href={card.url} target="_blank">
                <img src= {card.imageSource ? card.imageSource : noImg} alt="카드 이미지" />
                <div className="card-text">
                  <p className="createdAt">
                    <DateInfo createdAt={card.createdAt}/>
                    {DateInfo}
                  </p>
                  <p className="desc">
                    {card.description}
                  </p>
                  <p className="date">
                    <DateText createdAt={card.createdAt}/>
                    {DateText}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Main;