import React from 'react';
import '../CSS/Landing.css'
import LogoImg from '../images/logo.svg'
export default function Header() {
  return (
      <nav className="nav-container">
  <div className="nav-box">
    <a href="index.html">
      <img
        src={LogoImg}
        alt="홈으로 연결된 Linkbrary 로고"
        className="logo"
      />
    </a>
    <a className="cta cta-short" href="signin.html">
      <span>로그인</span>
    </a>
  </div>
</nav>
  );
}

