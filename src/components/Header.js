import logoImg from "../assets/logo.svg";
import "./Style.css";
import { useEffect, useState } from "react";
// import { getProfile } from "../api";

function Header() {
  const [profile, setProfile] = useState(null);
  const fetchProfile = async () => {
    try {
      const response = await fetch('https://bootcamp-api.codeit.kr/api/sample/user');
      const data = await response.json();
      setProfile(data);
    } catch (error) {
      console.error('프로필 데이터를 불러오는 중 에러 발생:', error);
    }
  };

  useEffect(() => {
    fetchProfile();
  },[]);

  return (
  
    <header>
      <nav className="NavBar">
        <a href="/">
          <img src={logoImg} alt="홈으로 연결된 Linkbrary 로고" />
        </a>
        <div>
      {profile ? (
        <div>
          <p className="Profile"><img className="ProfileImg" src={profile.profileImageSource} alt="프로필 이미지" />{profile.email}</p>
        </div>
      ) : (
        <a href="/">
          <span className="signin">로그인</span>
        </a>
      )}
    </div>
      </nav>
    </header>
  );
}

export default Header;
