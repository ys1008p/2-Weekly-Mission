import styles from "../styles/Header.module.css";

function Header({ email }) {
  return (
    <header>
      <div className={styles.headerBox}>
        <img className={styles.headerLogo} src={process.env.PUBLIC_URL + "/images/logo.png"} alt="로고이미지" />
        {email ? (
          <div className={styles.profile}>
            <div className={styles.profileIconBox}>
              <img className={styles.profileIcon} src={process.env.PUBLIC_URL + "/images/my-profile.png"} alt="프로필 아이콘" />
            </div>
            <div className={styles.email}>{email}</div>
          </div>
        ) : (
          <a className={styles.loginButton}>로그인</a>
        )}
      </div>
    </header>
  );
}

export default Header;
