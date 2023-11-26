import { useEffect, useState } from "react";
import styles from "../styles/Card.module.css";

function Card({link}) {
  const [isHover, setIsHover] = useState(false);
  const [time, setTime] =useState()
  const createdAtString = link.createdAt
  const createdAt = new Date(createdAtString);
  const currentTime = new Date();

  const elapsedMinutes = Math.floor((currentTime.getTime() - createdAt.getTime()) / (1000 * 60));
  const elapsedHour = Math.floor((currentTime.getTime() - createdAt.getTime()) / (1000 * 60 * 60));
  const elapsedDay = Math.floor((currentTime.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24));
  const elapsedMonth = Math.floor((currentTime.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24 * 30));

  const getUploadTime = () => {
    if (elapsedMinutes < 2) {
      setTime("1 minute ago");
    } else if (elapsedMinutes < 60) {
      setTime(`${elapsedMinutes} minutes ago`);
    } else if (elapsedHour < 24) {
      setTime(`${elapsedHour} hours ago`);
    } else if (elapsedDay < 30) {
      setTime(`${elapsedDay} days ago`);
    } else if (elapsedMonth < 12) {
      setTime(`${elapsedMonth} months ago`);
    } else {
      const years = Math.floor(elapsedMonth / 12);
      setTime(years === 1 ? "1 year ago" : `${years} years ago`);
    }
  };

  console.log(elapsedMonth+"달",elapsedDay+"일",elapsedHour+"시",+elapsedMinutes+"분")

  const year = createdAt.getFullYear();
  const month = createdAt.getMonth() + 1; 
  const day = createdAt.getDate();

  const date = `${year}. ${month}. ${day}`
      const handleHover=()=>{
        setIsHover(true)
    }
    const handleHoverOut=()=>{
      setIsHover(false)
    }

    useEffect(()=>{
      getUploadTime();
    },[])


  return (
    <div onMouseOver={handleHover} onMouseOut={handleHoverOut} className={styles.card}>
        <img className={link && link.imageSource? styles.cardImage:styles.noImage} src={link && link.imageSource? link.imageSource: "/images/noImage.svg"}/>
        <div className={isHover? `${styles.cardDescription} ${styles.hover}`:styles.cardDescription}>
          <div className={styles.timeBox}>
              <div className={styles.time}>{time}</div>
              <img src={process.env.PUBLIC_URL + "/images/meatball.png"}/>
          </div>
          <p className={styles.text}>{link && link.description}</p>
          <div className={styles.date}>{date}</div>
        </div>
    </div>
  );
  }

export default Card;
