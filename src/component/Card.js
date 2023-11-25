import { useState } from "react";
import styles from "../styles/Card.module.css";

function Card({link,isHover}) {

  const createdAtString = link.createdAt
  const createdAt = new Date(createdAtString);
  const year = createdAt.getFullYear();
  const month = createdAt.getMonth() + 1; 
  const day = createdAt.getDate();
  const date = `${year}. ${month}. ${day}`

  return (
    <div className={styles.card}>
        <img className={link && link.imageSource? styles.cardImage:styles.noImage} src={link && link.imageSource? link.imageSource: "/images/noImage.svg"}/>
        <div className={styles.cardDescription}>
          <div className={styles.timeBox}>
              <div className={styles.time}>10 minutes ago</div>
              <img src={process.env.PUBLIC_URL + "/images/meatball.png"}/>
          </div>
          <p className={styles.text}>{link && link.description}</p>
          <div className={styles.date}>{date}</div>
        </div>
    </div>
  );
}

export default Card;
