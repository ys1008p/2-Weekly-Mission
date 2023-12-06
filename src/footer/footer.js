import twitterImg from "../img/akar-icons_twitter-fill.png";
import youtubeImg from "../img/akar-icons_youtube-fill.png";
import instarImg from "../img/ant-design_instagram-filled.png";
import facebookImg from "../img/akar-icons_facebook-fill.png";
import React from "react";
import "../styles/footer.css";

export function Footer() {
  return (
    <footer>
      <div className="footer-box">
        <div className="copyright">©codeit - 2023</div>
        <div className="footer-links">
          <a className="footer-link">Privacy Policy</a>
          <a className="footer-link">FQA</a>
        </div>
        <div className="SNS">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <img src={facebookImg} alt="페이스북링크" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <img src={twitterImg} alt="트위터링크" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
            <img src={youtubeImg} alt="유튜브링크" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <img src={instarImg} alt="인스타링크" />
          </a>
        </div>
      </div>
    </footer>
  );
}
