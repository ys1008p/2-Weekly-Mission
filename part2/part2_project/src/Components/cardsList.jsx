import { timeAgo } from "../util/time.js";
import noneImg from "../img/!img.svg";
import "../css/card.css";

const Cards = ({ card }) => {
  const { createdAt, description, imageSource, title, id, url } = { card };

  function formatDate(value) {
    const date = new Date(value);
    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
  }

  return (
    <a href={url} className="card" key={id}>
      <img className="cardImg" src={imageSource || noneImg} alt={title} />
      <div className="cardText">
        <p className="timeAgo">{timeAgo(createdAt)}</p>
        <h6 className="cardDescription">{description}</h6>
        <p className="makeDate">{formatDate(createdAt)}</p>
      </div>
    </a>
  );
};

// 이 부분이 왜 구현이 안되는 지 모르겠어요....

export default function CardsList({ cardData }) {
  return (
    <ul className="CardList">
      {cardData?.map((card) => (
        <li key={card.id}>
          <Cards card={card} />
        </li>
      ))}
    </ul>
  );
}
