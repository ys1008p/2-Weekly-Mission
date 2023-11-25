import React from 'react';
import LogoImg from '../images/logo.svg'
import { HeaderApi, LoginProfile } from "../api";
import { useEffect, useState } from "react";

export default function Header({ setUserFolder, status, setCardData }) {
  const [userData, setUserData] = useState(null);
  const [userProfile, setUserProfile] = useState({
    img: "",
    email: "",
  });

  const user = async () => {
    try {
      const result = await HeaderApi();
      setUserData(result);
      setUserProfile((prev) => ({
        ...prev,
        img: result.profileImageSource,
        email: result.email,
      }));
      loginData();
    } catch (error) {
      console.log(error);
    }
  };

  const loginData = async () => {
    try {
      const result = await LoginProfile();
      setUserFolder((prev) => ({
        ...prev,
        name: result.folder.name,
        userName: result.folder.owner.name,
        img: result.folder.owner.profileImageSource,
      }));
      setCardData({ ...result.folder.links });
      status(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    user();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
    {userData ? (
           <div className='UserContainer'>
          <p className="UserEmail">
            <img src={`${userProfile.img}`} alt="UserImg" className='UserImg' />
            {`${userProfile.email}`}
          </p>
          </div>
        ) : (
          <a className="cta cta-short" href="signin.html">로그인</a>
        )}
      </div>
</nav>
  );
}

