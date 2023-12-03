import { timeAgo } from "../util/time.js";
import noneImg from "../img/!img.svg";
import "../css/card.css";

const Cards = ({ card }) => {
  const {
    created_at,
    createdAt,
    description,
    image_source,
    imageSource,
    title,
    url,
  } = card;

  function formatDate(value) {
    const date = new Date(value);
    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
  }

  return (
    <a href={url} className="card">
      <div className="cardImgBox">
        <img
          className="cardImg"
          src={imageSource || image_source || noneImg}
          alt={title}
        />
      </div>
      <div className="cardText">
        <p className="timeAgo">{timeAgo(createdAt || created_at)}</p>
        <h6 className="cardDescription">{description}</h6>
        <p className="makeDate">{formatDate(createdAt || created_at)}</p>
      </div>
    </a>
  );
};

export default function CardsList({ cardData }) {
  return (
    <ul className="CardList">
      {cardData?.map((card) => (
        <li className="cardBox" key={card.id}>
          <Cards card={card} />
        </li>
      ))}
    </ul>
  );
}
