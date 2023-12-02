import emptyLogo from "../../images/card-logo.svg";
import kebab from "../../images/kebab.svg";

const MINUTE = 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const MONTH = DAY * 31;
const YEAR = MONTH * 12;

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function timeAgo(value) {
  const createdDate = new Date(value);
  const date = new Date();

  let timeAgoDate = date - createdDate;
  timeAgoDate = timeAgoDate / 1000;

  if (timeAgoDate < 2 * MINUTE) return "1 minute ago";
  if (timeAgoDate < HOUR)
    return `${Math.floor(timeAgoDate / MINUTE)} minutes ago`;
  if (timeAgoDate < 2 * HOUR) return "1 hour ago";
  if (timeAgoDate < DAY) return `${Math.floor(timeAgoDate / HOUR)} hours ago`;
  if (timeAgoDate < 2 * DAY) return "1 day ago";
  if (timeAgoDate < MONTH) return `${Math.floor(timeAgoDate / DAY)} days ago`;
  if (timeAgoDate < 2 * MONTH) return "1 month ago";
  if (timeAgoDate < YEAR)
    return `${Math.floor(timeAgoDate / MONTH)} months ago`;
  if (timeAgoDate < 2 * YEAR) return "1 year ago";
  if (timeAgoDate >= 2 * YEAR) return `${timeAgoDate / YEAR} years ago`;
}

function handleCardClick(url) {
  window.open(url, "_blank");
}

function CardItem({ link, handleCardClick }) {
  const { createdAt, url, description, imageSource } = link;
  const onClick = () => handleCardClick(url);

  return (
    <div className="card">
      <div className="img-section" onClick={onClick}>
        {imageSource ? (
          <img className="card-image" src={imageSource} alt="카드 이미지" />
        ) : (
          <img
            className="empty card-image"
            src={emptyLogo}
            alt="빈 카드 이미지"
          />
        )}
      </div>
      <div className="info-section">
        <div className="time-ago-kebab-section">
          <span className="time-ago">{timeAgo(createdAt)}</span>
          <img className="kebab" src={kebab} alt="더보기 메뉴" />
        </div>
        <span className="description">{description}</span>
        <span className="created-at">{formatDate(createdAt)}</span>
      </div>
    </div>
  );
}

function Card({ folderLinks }) {
  return (
    <ul>
      {folderLinks.map((link) => (
        <li key={link.id}>
          <CardItem link={link} handleCardClick={handleCardClick} />
        </li>
      ))}
    </ul>
  );
}

export default Card;
