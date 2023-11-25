import { useEffect, useState } from "react";
import "./Header.css";

function Header() {
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
  const { email, profileImageSource, name } = userData;
  // 데이터 확인용
  console.log(userData);

  return (
    <header className="header-container">
      <nav className="nav-bar">
        <div className="nav-item">
          <a href="/">
            <img src="img/logo.png" alt="logo" />
          </a>
          <p>{email}</p>
        </div>
      </nav>

      <section>
        <img src={profileImageSource} alt="profile-img" />
        <p>{name}</p>
        <p>⭐ 즐겨찾기</p>
      </section>
    </header>
  );
}

export default Header;
