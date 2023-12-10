import Atag from "./Atag";
import "../css/footer.css";
function Footer() {
  return (
    <footer>
      <div className="footer-box">
        <span className="copyright">©codeit - 2023</span>
        <div className="footer-links">
          <Atag
            className="footer-link"
            href="/privacy/privacy.html"
            contents="Privacy policy"
          />

          <Atag className="footer-link" href="/faq/faq.html" contents=" FAQ" />
        </div>
        <div className="sns">
          <Atag
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            name="facebook"
          />
          <Atag
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            name="twitter"
          />

          <Atag
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            name="youtube"
          />

          <Atag
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            name="instagram"
          />
        </div>
      </div>
    </footer>
  );
}
export default Footer;
