import { useEffect, useState } from "react";
import "./Card.css";
export function Card({ link }) {
  const { id, createdAt, url, title, description, imageSource } = link;
  const [mins, setMins] = useState("");
  function calCreatedAt() {
    const now = new Date();
    const created = { createdAt };
    const createdDate = new Date(Object.values(created)[0].slice(0, -1));
    const diffMSec = now.getTime() - createdDate.getTime();
    console.log(diffMSec);
    const MINS = Math.floor(diffMSec / (1000 * 60));
    const HOURS = Math.floor(diffMSec / (1000 * 60 * 60));
    const DAYS = Math.floor(diffMSec / (1000 * 60 * 60 * 24));
    const MONTHS = Math.floor(diffMSec / (1000 * 60 * 60 * 24 * 30));
    const YEARS = Math.floor(diffMSec / (1000 * 60 * 60 * 24 * 30 * 12));
    console.log(MINS, HOURS, DAYS);
    if (MINS < 2) {
      setMins("1 minute ago");
    } else if (MINS <= 59) {
      setMins({ MINS } + "minutes ago");
    } else if (MINS >= 60) {
      setMins(`${HOURS} hour ago`);
    } else if (HOURS <= 23) {
      setMins(`${HOURS} hours ago`);
    } else if (HOURS >= 24) {
      setMins(`${DAYS} day ago`);
    } else if (DAYS <= 30) {
      setMins(`${DAYS} day ago`);
    } else if (DAYS >= 31) {
      setMins(`${MONTHS} month ago`);
    } else if (MONTHS >= 12) {
      setMins(`${YEARS} year ago`);
    } else if (MONTHS < 13) {
      setMins(`${Math.floor(YEARS / 2, 1)} years ago`);
    }
    // HOURS >= 24 && setMins(`${DAYS} day ago`);
    // DAYS <= 30 && setMins(`${DAYS} days ago`);
    // DAYS >= 3 && setMins(`${MONTHS} month ago`);
    // MONTHS >= 12 && setMins(`${YEARS} year ago`);
    // MONTHS < 13 && setMins(`${Math.floor(YEARS / 2, 1)} years ago`);
    // MINS < 2 && setMins("1 minute ago");
    // MINS <= 59 && setMins({ MINS } + "minutes ago");
    // MINS >= 60 && setMins(`${HOURS} hour ago`);
    // HOURS <= 23 && setMins(`${HOURS} hours ago`);

    //     // 30일 이하는 “OO days ago”
    // 31일 이상은 “1 month ago”
    // 11달 이하는 “OO months ago”
    // 12달 이상은 “1 year ago”
    // OO달 이상은 “{OO/12(소수점 버린 정수)} years ago”
    // console.log(createdDate);
    // return diffMSec;
  }

  useEffect(() => {
    calCreatedAt();
  }, []);

  console.log("card component", url, id, createdAt);
  return (
    <>
      <a target="_blank" href={url}>
        <div class="flex-wrapper">
          <div className="card-img_wrapper">
            <img
              className="card-img"
              src={imageSource}
              alt={title + "이미지"}
            />
          </div>
          <div className="info-wrapper">
            <div className="mins">{mins}</div>
            <div className="infos">
              <div className="title">{title}</div>
              <div className="description">{description}</div>
            </div>
            <div className="created">{createdAt}</div>
          </div>
        </div>
      </a>
    </>
  );
}

export default Card;
