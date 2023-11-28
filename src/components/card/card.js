import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./card.module.css";

function formatDate(value) {
  const date = new Date(value);
  const today = new Date();
  const nowTime = today - date;
  const minute = (nowTime / (1000 * 60)) % 60;
  const hour = (nowTime / (1000 * 60 * 60)) % 24;
  const day = nowTime / (1000 * 60 * 60 * 24);
  const month = nowTime / (1000 * 60 * 60 * 24) / 31;

  if (minute < 2) {
    return "1 minute ago";
  } else if (minute <= 59 && minute >= 2) {
    return "00 minute ago";
  } else if (minute > 60) {
    return "1 hour ago";
  } else if (hour <= 23) {
    return "00 hour ago";
  } else if (hour >= 24) {
    return "1 day ago";
  } else if (day <= 30) {
    return "00 day ago";
  } else if (day >= 31) {
    return "1 month ago";
  } else if (month <= 11) {
    return "00 month ago";
  } else if (month >= 12) {
    return "1 year ago";
  } else {
    return "1년 이상";
    // return `${Math.floor(00 / 12)} year ago`;
  }
}

function LinkListItem({ item }) {
  return (
    <a href={item.url} className={styles.cardLinkList}>
      <div className={styles.cardLinkImg}>
        <div>
          <img className={styles.cardImg} src={item.imageSource} alt="" />
        </div>
      </div>
      <div className={styles.text}>
        <span className={styles.cardTime}>{formatDate(item.createdAt)}</span>
        <p className={styles.cardDes}>{item.description}</p>
        <span className={styles.cardDay}>{item.createdAt}</span>
      </div>
    </a>
  );
}

export default function Cards() {
  const [linkList, setLinkList] = useState([]);
  useEffect(() => {
    const userData = async () => {
      try {
        const result = await axios.get("https://bootcamp-api.codeit.kr/api/sample/folder");
        const links = result.data.folder.links;
        setLinkList(links);
        return result.data;
      } catch {
        console.log("실패했단다");
      }
    };
    userData();
  }, []);

  return (
    <ul className={styles.cardList}>
      {linkList.map((item) => {
        return (
          <li className={styles.cardWrap}>
            <LinkListItem item={item} />
          </li>
        );
      })}
    </ul>
  );
}
