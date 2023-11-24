import React from 'react';

import Facebook from '../../images/icon/akar-icons_facebook-fill.svg';
import Twitter from '../../images/icon/akar-icons_twitter-fill.svg';
import Youtube from '../../images/icon/akar-icons_youtube-fill.svg';
import Instagram from '../../images/icon/ant-design_instagram-filled.svg';

function Footer() {
  return (
    <footer>
      <div>
        <span className="company">©codeit - 2023</span>
        <span className="link">
          <a href="/">Privacy Policy</a>
          <a href="/">FAQ</a>
        </span>
        <span className="sns">
          <a
            href="https://www.facebook.com/?locale=ko_KR"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Facebook} alt="페이스북" />
          </a>
          <a
            href="https://twitter.com/?lang=ko"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Twitter} alt="트위터" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <img src={Youtube} alt="유튜브" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src={Instagram} alt="인스타그램" />
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
