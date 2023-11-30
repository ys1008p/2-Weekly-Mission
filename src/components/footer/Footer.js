import "./footer.css";
import facebook from "../images/facebook.svg";
import twiiter from "../images/twiiter.svg";
import youtube from "../images/youtube.svg";
import instagram from "../images/instagram.svg";

function Footer() {
  return (
    <footer className="footer">
      <div class="footer-box">
        <span class="copyright">©codeit - 2023</span>
        <div class="footer-links">
          <a class="footer-link" href="privacy.html">
            Privacy Policy
          </a>
          <a class="footer-link" href="faq.html">
            FAQ
          </a>
        </div>
        <div class="sns">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="facebook"
              src={facebook}
              alt="facebook 홈페이지로 연결된 facebook 로고"
            />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="twitter"
              src={twiiter}
              alt="twitter 홈페이지로 연결된 twitter 로고"
            />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="youtube"
              src={youtube}
              alt="youtube 홈페이지로 연결된 youtube 로고"
            />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="instagram"
              src={instagram}
              alt="instagram 홈페이지로 연결된 instagram 로고"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
