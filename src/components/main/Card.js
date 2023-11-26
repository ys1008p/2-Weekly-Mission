import { useEffect, useState } from "react";
import "./Card.css";
import NoImg from "../../assets/card_no-img.svg";
export function Card({ link }) {
  const { id, createdAt, url, title, description, imageSource } = link;
  const [mins, setMins] = useState("");
  const [createdDates, setCreatedDates] = useState({});
  const [isHovered, setIsHovered] = useState(false);

  function calCreatedAt() {
    const now = new Date();
    const created = { createdAt };
    const createdDate = new Date(Object.values(created)[0].slice(0, -1));
    setCreatedDates((prev) => ({
      ...prev,
      year: createdDate.getFullYear(),
      month: createdDate.getMonth() + 1,
      date: createdDate.getDate(),
    }));

    const diffMSec = now.getTime() - createdDate.getTime();
    const MINS = Math.floor(diffMSec / (1000 * 60));
    const HOURS = Math.floor(diffMSec / (1000 * 60 * 60));
    const DAYS = Math.floor(diffMSec / (1000 * 60 * 60 * 24));
    const MONTHS = Math.floor(diffMSec / (1000 * 60 * 60 * 24 * 30));
    const YEARS = Math.floor(diffMSec / (1000 * 60 * 60 * 24 * 30 * 12));
    console.log(MINS, HOURS, DAYS, MONTHS, YEARS);

    if (MONTHS < 13 && YEARS > 0) {
      setMins(`${Math.floor(MONTHS / 12)} years ago`);
    } else if (MONTHS >= 12 && YEARS > 0) {
      setMins(`${YEARS} year ago`);
    } else if (DAYS >= 31 && MONTHS > 0) {
      setMins(`${MONTHS} month ago`);
    } else if (DAYS <= 30 && DAYS > 0) {
      setMins(`${DAYS} day ago`);
    } else if (HOURS >= 24 && DAYS > 0) {
      setMins(`${DAYS} day ago`);
    } else if (HOURS <= 23 && HOURS > 0) {
      setMins(`${HOURS} hours ago`);
    } else if (MINS >= 60 && HOURS > 0) {
      setMins(`${HOURS} hour ago`);
    } else if (MINS <= 59 && MINS > 0) {
      setMins({ MINS } + "minutes ago");
    } else if (MINS < 2) {
      setMins("1 minute ago");
    }
  }

  function onMouseEnterHandler() {
    setIsHovered(true);
  }
  function onMouseLeaveHandler() {
    setIsHovered(false);
  }
  useEffect(() => {
    calCreatedAt();
  }, []);

  return (
    <>
      <a target="_blank" href={url}>
        <div
          className={isHovered ? "flex-wrapper grow" : "flex-wrapper"}
          id={`card-${id}`}
          onMouseEnter={onMouseEnterHandler}
          onMouseLeave={onMouseLeaveHandler}
        >
          <div className="card-img_wrapper">
            {imageSource ? (
              <img
                className="card-img"
                src={imageSource}
                alt={title + "이미지"}
              />
            ) : (
              <img className="card-img" src={NoImg} alt={title + "이미지"} />
            )}
          </div>
          <div className="info-wrapper">
            <div className="mins">{mins}</div>
            <div className="infos">
              <div className="title">{title}</div>
              <div className="description">{description}</div>
            </div>
            <div className="created">
              {createdDates.year}. {createdDates.month}. {createdDates.date}
            </div>
          </div>
        </div>
      </a>
    </>
  );
}

export default Card;
