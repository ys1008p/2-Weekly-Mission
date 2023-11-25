import { useEffect, useState } from "react";
import logo from "../asset/linkbrary-logo.png";
import "../styles/HomeStyles.css";
import { getProfiles } from "../api";

function Gnb() {
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    const data = await getProfiles();
    setUserData(data);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <nav>
      <div className="nav">
        <a href="/">
          <img src={logo} alt="홈으로 연결된 Linkbrary 로고" />
        </a>
        {userData ? (
          <div className="gnb">
            <img className="gnb-img" src={userData.profileImageSource} alt="프로필 사진" />
            <span className="email">{userData.email}</span>
          </div>
        ) : (
          <div>
            <div className="login button">로그인</div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Gnb;
