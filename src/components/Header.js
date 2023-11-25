import '../components/Header.css';
import logo from '../assets/logo.svg';
import codeit from '../assets/ico-codeit.png';
import favorites from '../assets/favorites.png';
import { useState, useEffect } from 'react';
import { getProfile } from '../api';

function Header({ className }){
  const [profileImg, setProfileImg] = useState(null);
  const [profileEmail, setProfileEmail] = useState(null);
  const handleLoad = async (options) => {
    const { email, profileImageSource } = await getProfile(options);
    setProfileEmail(email);
    setProfileImg(profileImageSource);
  }

  useEffect(() => {
    handleLoad(profileImg, profileEmail);
  }, [profileImg, profileEmail])

  return (
    <header className={className}>
      <nav>
        <h1 className="logo">
          <a href="/">
            <img src={logo} alt="홈으로 연결된 Linkbrary 로고" />
          </a>
        </h1>
        <div className="profile">
          {profileEmail ? 
           <a href="/">
           <img src={profileImg} alt="프로필 이미지" />
           <p className="text mobile-hide">
             {profileEmail}
           </p>
         </a> :
          <a href="signin.html" className="cta cta-short">
            <span>로그인</span>
          </a>}
        </div>
      </nav> 
      <div className="title">
        <img className="img-codeit" src={codeit} alt="코드잇" />
        <p className="codeit">
          @코드잇
        </p>
        <img className="img-favorites" src={favorites} alt="즐겨찾기" />
      </div>
    </header>
  )
}

export default Header;