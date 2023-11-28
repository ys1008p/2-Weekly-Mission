import styles from "./footer.module.css";
import facebook from "./footer_ico_facebook.png";
import twitter from "./footer_ico_twitter.png";
import youtube from "./footer_ico_youtube.png";
import instagram from "./footer_ico_instagram.png";

export default function Fooder() {
  return (
    <footer>
      <span className={styles.copyright}>©codeit - 2023</span>
      <div className={styles.footerLinks}>
        <a href="/privacy" className="footer-links-privacy">
          Privacy Policy
        </a>
        <a href="/faq" className={styles.footerLinksPrivacy}>
          FAQ
        </a>
      </div>
      <ul className={styles.footerSnss}>
        <li className="sns">
          <a href="https://www.facebook.com/" target="_blank">
            <img src={facebook} alt="페이스북" />
          </a>
        </li>
        <li className="sns">
          <a href="https://twitter.com/" target="_blank">
            <img src={twitter} alt="트위터" />
          </a>
        </li>
        <li className="sns">
          <a href="https://www.youtube.com/" target="_blank">
            <img src={youtube} alt="유튜브" />
          </a>
        </li>
        <li className="sns">
          <a href="https://www.instagram.com/" target="_blank">
            <img src={instagram} alt="인스타그램" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
