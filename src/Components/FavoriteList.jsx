import "../styles/HomeStyles.css";
import formatTimeAgo from "./FormatTimeAgo";
import noimage from "../asset/noimage.png";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth()}. ${date.getDate()}`;
}

function FavoriteList({ card }) {
  const timeAgo = formatTimeAgo(card.createdAt);

  return (
    <div>
      <a href={card.url} target="_blank" rel="noopener noreferrer" className="card">
        <div className="img-container">
          <img className="card-img" src={card.imageSource || noimage} alt={card.title} type="card" />
        </div>
        <div className="card-info">
          <p className="time-ago">{timeAgo}</p>
          <p className="links-description">{card.description}</p>
          <p className="cratedAt">{formatDate(card.createdAt)}</p>
        </div>
      </a>
    </div>
  );
}

export default FavoriteList;
