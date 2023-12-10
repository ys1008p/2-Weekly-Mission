import defaultImg from "../asset/defaultImg.jpg";
import "../css/card.css";
function TimeAgo({ time }) {
  const currentDate = new Date();
  const createdDate = new Date(time);

  //계산이 어려워 붙여넣기 했습니다
  const timeDiff = Math.floor((currentDate - createdDate) / 1000);
  if (timeDiff < 60) {
    return "1 minute ago";
  } else if (timeDiff <= 59 * 60) {
    return `${Math.floor(timeDiff / 60)} minutes ago`;
  } else if (timeDiff < 24 * 60 * 60) {
    return "1 hour ago";
  } else if (timeDiff <= 23 * 60 * 60) {
    return `${Math.floor(timeDiff / (60 * 60))} hours ago`;
  } else if (timeDiff < 30 * 24 * 60 * 60) {
    return "1 day ago";
  } else if (timeDiff <= 31 * 24 * 60 * 60) {
    return `${Math.floor(timeDiff / (24 * 60 * 60))} days ago`;
  } else if (timeDiff < 11 * 30 * 24 * 60 * 60) {
    return "1 month ago";
  } else if (timeDiff <= 12 * 30 * 24 * 60 * 60) {
    return `${Math.floor(timeDiff / (30 * 24 * 60 * 60) + 1)} months ago`;
  } else {
    return `${Math.floor(timeDiff / (365 * 24 * 60 * 60) + 1)} years ago`;
  }
}

function LinkListItem({ link }) {
  const { createdAt, url, title, description, imageSource } = link;
  const createdDate = new Date(createdAt);
  const modifyDate = createdDate.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div className="cardImgDiv">
        <img src={imageSource || defaultImg} alt={title} />
      </div>
      <div className="contentsDiv">
        <p className="timetogo">
          <TimeAgo time={createdDate} />
        </p>
        <p className="contentsDescriptionDiv">{description}</p>
        <p>{modifyDate}</p>
      </div>
    </a>
  );
}

export function SharedCard({ links }) {
  return (
    <div className="gridFlexbox">
      <div className="gridparent">
        {links.map((link, index) => (
          <div className={`card num${index + 1}`} key={link.id}>
            <LinkListItem link={link} />
          </div>
        ))}
      </div>
    </div>
  );
}
