import { useEffect, useState } from "react";
import "./Header.css";

import HeaderFoloderSection from "./HeaderFolderSection";

function Navbar() {
  // 유저 데이터를 담을 State
  const [userData, setUserData] = useState({});

  // 사이드 이펙트 처리 & 데이터 GET
  useEffect(() => {
    async function getServerData() {
      try {
        const res = await fetch(
          "https://bootcamp-api.codeit.kr/api/sample/user"
        );
        const data = await res.json();
        setUserData(data);
      } catch (e) {
        console.log("에러 :" + e);
      }
    }

    getServerData();
  }, []);

  //이름 추상화
  const { email, profileImageSource } = userData;
  // 데이터 확인용
  //console.log(userData);

  return (
    <>
      <nav className="nav-bar">
        <div className="nav-item">
          <a href="/">
            <img src="img/logo.png" alt="logo" className="nav-item-logo" />
          </a>

          {userData?.id ? (
            <>
              <div className="nav-item-profile">
                <img
                  src={profileImageSource}
                  alt="profile-img"
                  className="nav-item-profile-img"
                />
                <p className="nav-item-profile-email">{email}</p>
              </div>
            </>
          ) : (
            <div className="nav-item-profile">
              <button className="nav-login-btn">로그인</button>
            </div>
          )}
        </div>
      </nav>
      {userData?.id ? <HeaderFoloderSection /> : ""}
    </>
  );
}

export default Navbar;
