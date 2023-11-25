import styles from "../styles/Card.module.css";

function Card() {
  return (
    <div>
      <div className={styles.cardBox}>
        <div className={styles.cardImage}>
          <div className={styles.cardDescription}>
            <div className={styles.timeBox}>
                <div className={styles.time}>10 minutes ago</div>
                <img src={process.env.PUBLIC_URL + "/images/meatball.png"}/>
            </div>
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. Tldkd</p>
            <div className={styles.date}>2023.11.25</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
