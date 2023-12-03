import TwitImg from "../img/akar-icons_facebook-fill.jpg";
import React from "react";
import { ReactComponent as FaceImg } from "../img/facebook.svg";
import { ReactComponent as InstarImg } from "../img/instagram.svg";
import { ReactComponent as YoutubeImg } from "../img/youtube.svg";
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
        <div>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <img src={FaceImg} alt="페이스북링크" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <img src={TwitImg} alt="트위터링크" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
            <img src={YoutubeImg} alt="유튜브링크" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <img src={InstarImg} alt="인스타링크" />
          </a>
        </div>
      </div>
    </footer>
  );
}
