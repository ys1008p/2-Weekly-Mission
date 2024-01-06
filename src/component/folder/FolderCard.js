import defaultImg from "../../asset/defaultImg.jpg";
import "../../css/card.css";
import starimg from "../../asset/star.svg";
import kebabImg from "../../asset/kebab.svg";
import { useState } from "react";

export function FolderCard({ data, handleModalOpen }) {
  return (
    <div className="gridFlexbox">
      <div className="gridparent">
        {data.map((datum, index) => (
          <div className={`card num${index + 1}`} key={datum.id} data={datum}>
            <div className="starimg">
              <img src={starimg} alt="starimg" />
            </div>
            <LinkListItem datum={datum} handleModalOpen={handleModalOpen} />
          </div>
        ))}
      </div>
    </div>
  );
}
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

function LinkListItem({ datum, handleModalOpen }) {
  const { created_at, url, title, description, image_source } = datum;

  const createdDate = new Date(created_at);
  const modifyDate = createdDate.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = (e) => {
    e.preventDefault();
    setMenuOpen(!isMenuOpen);
  };
  const handleButtonClick = (e) => {
    const value = e.currentTarget.getAttribute("data-value");
    handleModalOpen(true, value);
  };
  return (
    <>
      <a href={url} target="_blank" rel="noreferrer">
        <div className="cardImgDiv">
          <img src={image_source || defaultImg} alt={title} />
        </div>
      </a>
      <div className="contentsDiv">
        <div className="kebabTimetogo">
          <p className="timetogo">
            <TimeAgo time={createdDate} />
          </p>
          <button onClick={handleMenuToggle}>
            <img src={kebabImg} alt="kebabimg" />
          </button>
        </div>
        <p className="contentsDescriptionDiv">{description}</p>
        <p>{modifyDate}</p>
        {isMenuOpen && (
          <div className="contextMenu">
            <button data-value="DeleteLinkModal" onClick={handleButtonClick}>
              삭제하기
            </button>
            <button data-value="AddModal" onClick={handleButtonClick}>
              폴더에 추가
            </button>
          </div>
        )}
      </div>
    </>
  );
}
