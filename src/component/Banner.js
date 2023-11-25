import styles from "../styles/Banner.module.css";

function Banner(){
    return(
        <section className={styles.banner}>
        <div className={styles.bannerBox}>
            <div className={styles.iconBox}><img src={process.env.PUBLIC_URL + "/images/codeit.png"}/></div>
            <div className={styles.bannerText}>@코드잇</div>
            <h1 className={styles.bannerTitle}>⭐️ 즐겨찾기</h1>
      </div>
        </section>
    )
}


export default Banner