import React from "react";
import LogoImg from "../../images/logo.svg";
import { HeaderApi } from "../../api";
import { useEffect, useState } from "react";
import "../../CSS/Landing.css";

export default function NavBar() {
  const [userData, setUserData] = useState(null);

  const fetchData = async () => {
    try {
      const userResponse = await HeaderApi();
      setUserData(userResponse);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <nav className="nav-container">
      <div className="nav-box">
        <img
          src={LogoImg}
          alt="홈으로 연결된 Linkbrary 로고"
          className="logo"
        />
        {userData ? (
          <div className="UserContainer">
            <p className="UserEmail">
              <img
                src={`${userData.profileImageSource}`}
                alt="UserImg"
                className="UserImg"
              />
              {`${userData.email}`}
            </p>
          </div>
        ) : (
          <a className="cta cta-short" href="signin.html">
            로그인
          </a>
        )}
      </div>
    </nav>
  );
}
