import "../styles/Footer.css";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import youtube from "../assets/youtube.svg";
import twitter from "../assets/twitter.svg";

function Footer() {
  return (
    <footer>
      <div className="footer-box">
        <span className="copyright">©codeit - 2023</span>
        <div className="footer-links">
          <a className="footer-link" href="privacy.html">
            Privacy Policy
          </a>
          <a className="footer-link" href="faq.html">
            FAQ
          </a>
        </div>
        <div className="sns">
          <a href="https://www.facebook.com/">
            <img src={facebook} alt="sns" />
          </a>
          <a href="https://twitter.com/">
            <img src={twitter} alt="sns" />
          </a>
          <a href="https://www.youtube.com/">
            <img src={youtube} alt="sns" />
          </a>
          <a href="https://www.instagram.com/">
            <img src={instagram} alt="sns" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
