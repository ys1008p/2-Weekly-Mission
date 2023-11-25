import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import instagram from "../assets/instagram.svg";
import "./Foot.css";

function Footer() {
  return (
    <div className="footer-box">
      <span className="copyright">©codeit - 2023</span>
      <div className="footer-links">
        <a className="footer-link" href="../../public/week5/privacy.html">
          Privacy Policy
        </a>
        <a className="footer-link" href="../../public/week5/faq.html">
          FAQ
        </a>
      </div>
      <div className="sns">
        <a href="https://www.facebook.com/" target="_blank">
          <img src={facebook} />
        </a>
        <a href="https://twitter.com/" target="_blank">
          <img src={twitter} />
        </a>
        <a href="https://www.youtube.com/" target="_blank">
          <img src={youtube} />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img src={instagram} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
