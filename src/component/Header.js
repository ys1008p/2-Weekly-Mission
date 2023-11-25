import styles from "../styles/Header.module.css";

function header() {
  return (
    <header>
      <div className={styles.headerBox}>
        <img className={styles.headerLogo} src={process.env.PUBLIC_URL + "/images/logo.png"} alt="로고이미지" />
        <div className={styles.profile}>
          <div className={styles.profileIconBox}>
            <img className={styles.profileIcon} src={process.env.PUBLIC_URL + "/images/my-profile.png"} alt="프로필 아이콘" />
          </div>
          <div className={styles.email}>Codeit@codeit.com</div>
        </div>
      </div>
    </header>
  );
}

export default header;
