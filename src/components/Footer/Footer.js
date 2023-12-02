import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import twitter from "../../images/twitter.svg";
import youtube from "../../images/youtube.svg";
import "./Footer.css";

function SNS({ type, alt }) {
  return (
    <div>
      <a
        href={`https://www.${alt}.com/`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={type} alt={`${alt} 홈페이지로 연결된 로고`} />
      </a>
    </div>
  );
}

function Footer() {
  const snsArray = [
    { type: facebook, alt: "facebook" },
    { type: twitter, alt: "twitter" },
    { type: youtube, alt: "youtube" },
    { type: instagram, alt: "instagram" },
  ];

  return (
    <footer>
      <div className="footer-box">
        <span className="copyright">©codeit - 2023</span>
        <div className="footer-links">
          <a className="footer-link" href="/">
            Privacy Policy
          </a>
          <a className="footer-link" href="/">
            FAQ
          </a>
        </div>
        <div className="sns">{snsArray.map((sns) => SNS(sns))}</div>
      </div>
    </footer>
  );
}

export default Footer;
