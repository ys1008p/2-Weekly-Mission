import FacebookImg from '../../assets/akar-icons_facebook-fill.svg';
import InstagramImg from '../../assets/ant-design_instagram-filled.svg';
import TwitterImg from '../../assets/akar-icons_twitter-fill.svg';
import YoutubeImg from '../../assets/akar-icons_youtube-fill.svg';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="Footer">
        <div className="Footer-copyright">©codeit - 2023</div>
        <div className="Footer-policies">
          <a href="/privacy">Privacy Policy</a>
          <a href="/faq">FAQ</a>
        </div>
        <div className="Footer-sns-links">
          <a
            className="Footer-sns-link"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={FacebookImg} alt="facebook 로고" />
          </a>
          <a
            className="Footer-sns-link"
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={TwitterImg} alt="twitter 로고" />
          </a>
          <a
            className="Footer-sns-link"
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={YoutubeImg} alt="youtube 로고" />
          </a>
          <a
            className="Footer-sns-link"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={InstagramImg} alt="instagram 로고" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
