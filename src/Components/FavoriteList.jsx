import "../styles/HomeStyles.css";
import formatTimeAgo from "./FormatTimeAgo";
import noimage from "../asset/noimage.png";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth()}. ${date.getDate}`;
}

function FavoriteList({ links: { createdAt, url, title, description, imageSource } }) {
  const timeAgo = new formatTimeAgo("createdAt");

  return (
    <div>
      <a href={url} target="_blank" rel="noopener noreferrer" className="FavoritListItem">
        <img className="FavoritListItem-img" src={imageSource || noimage} alt={title} type="card" />
        <div>
          <p className="time-ago">{timeAgo}</p>
          <p className="links-description">{description}</p>
          <p className="cratedAt">{formatDate(createdAt)}</p>
        </div>
      </a>
    </div>
  );
}

export default FavoriteList;
