import facebookImg from "../../src/assets/akar-icons_facebook-fill.png";
import twitterImg from "../../src/assets/akar-icons_twitter-fill.png";
import youtubeImg from "../../src/assets/akar-icons_youtube-fill.png";
import instagramImg from "../../src/assets/ant-design_instagram-filled.png";
import "../css/Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footerCenter">
        <p>codeit-2023</p>
        <ul className="gnbOne">
          <li className="menuOne">Privacy Policy</li>
          <li className="menuTwo">FAQ</li>
        </ul>
        <ul className="gnbTwo">
          <li>
            <a href="https://www.facebook.com/">
              <img src={facebookImg} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/">
              <img src={twitterImg} />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/">
              <img src={youtubeImg} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <img src={instagramImg} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
