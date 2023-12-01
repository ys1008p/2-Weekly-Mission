import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-item-container">
        <div className="footer-src">
          <p>©codeit - 2023</p>
        </div>

        <div className="footer-guide">
          <a href="/privacy">
            <p>Privacy Policy</p>
          </a>
          <a href="/faq">
            <p>FAQ</p>
          </a>
        </div>

        <div className="footer-icon">
          <a href="https://www.facebook.com" rel="noopener noreferrer">
            <img src="img/akar-icons_facebook-fill.svg " alt="facebook_icon" />
          </a>
          <a href="https://www.twitter.com" rel="noopener noreferrer">
            <img src="img/akar-icons_twitter-fill.svg " alt="twitter_icon" />
          </a>
          <a href="https://www.youtube.com" rel="noopener noreferrer">
            <img src="img/akar-icons_youtube-fill.svg " alt="youtube_icon" />
          </a>
          <a href="https://www.instagram.com" rel="noopener noreferrer">
            <img
              src="img/ant-design_instagram-filled.svg "
              alt="instagram_icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
