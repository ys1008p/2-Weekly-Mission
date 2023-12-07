import { timeAgo } from "../../util/time.js";
import noneImg from "../../img/!img.svg";
import "../../css/card.css";
import starImg from "../../img/star.svg";
import kebab from "../../img/kebab.svg";

const Cards = ({ card }) => {
  const {
    created_at,
    createdAt,
    description,
    image_source,
    imageSource,
    title,
    url,
    folder_id,
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
      <img className=" star" src={starImg} alt="즐겨찾기 버튼" />
      <img className="kebab" src={kebab} alt="기능 버튼" />
      <div className="cardText">
        <p className="timeAgo">{timeAgo(createdAt || created_at)}</p>
        <h6 className="cardDescription">{description}</h6>
        <p className="makeDate">{formatDate(createdAt || created_at)}</p>
      </div>
    </a>
  );
};

export default function CardsList({ cardData }) {
  console.log(cardData);
  return (
    <ul className="CardList">
      {cardData?.map((card) => (
        <li className="cardBox" key={card.id}>
          <Cards card={card} folderId={card.folder_id ? folderId : ""} />
        </li>
      ))}
    </ul>
  );
}
