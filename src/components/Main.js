import '../components/Main.css';
import { cardList } from './cardList';

function Main({ className }){
  return(
    <div className={className}>
      <div className="search">
        <input type="search" placeholder="링크를 검색해 보세요."/>
      </div>
      <div className="card">
        <ul>
          {cardList.map((card) => (
            <li key={card.id}>
              <a href="/">
                <img src={card.src} alt="카드 이미지"/>
                <div className="card-text">
                  <p className="createdAt">
                    10 minutes ago
                  </p>
                  <p className="desc">
                    Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. Tldkd Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. Tldkd
                  </p>
                  <p className="date">
                    2023. 3. 15
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