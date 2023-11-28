import logo from "./linkbrarylogo.png";
import styles from "./Nav.module.css";
import { ReactComponent as Myprofile } from "./Myprofile.svg";
import SampleUser from "./userName/SampleUser";

export default function Nav() {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.gnb}>
          <div className={styles.logo}>
            <img src={logo} alt="linkbrary" />
          </div>
          <div>
            <span className={styles.user}>
              <Myprofile />
            </span>
            <SampleUser>Codeit@codeit.com</SampleUser>
          </div>
        </nav>
      </header>
    </>
  );
}
