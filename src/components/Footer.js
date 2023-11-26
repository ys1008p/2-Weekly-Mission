import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import instagram from "../assets/instagram.svg";
import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-info">
        <li className="footer-info__company">@codeit - 2023</li>
        <li className="footer-info__guide">
          <a href="./privacy.html">Privacy Policy</a>
          <a href="./faq.html">FAQ</a>
        </li>
        <li className="footer-info__icons">
          <a href="https://www.facebook.com" rel="noreferrer" target="_blank">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="https://www.twitter.com" rel="noreferrer" target="_blank">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="https://www.youtube.com" rel="noreferrer" target="_blank">
            <img src={youtube} alt="youtube" />
          </a>
          <a href="https://www.instagram.com" rel="noreferrer" target="_blank">
            <img src={instagram} alt="instagram" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
