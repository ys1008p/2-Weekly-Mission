import facebook from "../asset/facebook.svg";
import twitter from "../asset/twitter.svg";
import youtube from "../asset/youtube.svg";
import instagram from "../asset/instagram.svg";

function Footer() {
  return (
    <footer>
      <div class="info">
        <div class="codeit">@codeit - 2023</div>
        <div class="policy">
          <a href="privacy.html">Privacy Policy</a>
          <a href="faq.html">FAQ</a>
        </div>
        <div class="sns">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src={youtube} alt="youtube" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
