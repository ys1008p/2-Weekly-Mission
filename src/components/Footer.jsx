import "../styles/Footer.css";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import instagram from "../assets/instagram.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="codeit">©codeit - 2023</div>
        <div className="policy-faq">
          <a href="/privacy.html">Privacy Policy</a>
          <a href="/faq.html">FAQ</a>
        </div>
        <div className="icon">
          <a href="https://www.facebook.com/" target="_blank">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <img src={youtube} alt="youtube" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export { Footer };
