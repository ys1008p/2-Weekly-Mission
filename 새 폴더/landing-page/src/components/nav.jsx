import "./nav.css";
import LogoImg from "../assets/logo.png";
import React, { useEffect, useState } from "react";

function Nav() {
  const [profileData, setProfileData] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://bootcamp-api.codeit.kr/api/sample/user?page=${page}`)
      .then((response) => response.json())
      .then((data) => setProfileData(data));
  }, [page]);

  return (
    <nav>
      <div className="navbar">
        <div>
          <a href="week1.html">
            <img
              className="logo"
              src={LogoImg}
              alt="홈으로 연결된 Linkbrary 로고"
            />
          </a>
        </div>
        <div>
          {profileData ? (
            // 프로필 데이터가 있는 경우
            <p className="Profile">
              <img
                className="ProfileImg"
                src={
                  profileData?.url ||
                  "https://codeit-front.s3.ap-northeast-2.amazonaws.com/images/default_profile.png"
                }
                alt="프로필 이미지"
              />
              {`(${profileData?.email}`}
            </p>
          ) : (
            // 프로필 데이터가 없는 경우
            <a className="cta" href="./signin">
              로그인
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
