import React from "react";
import LogoImg from "../../images/logo.svg";
import { FolderHeaderApi } from "../../api";
import { useEffect, useState } from "react";
import "../../CSS/Folder.css";

export default function FolderNavBar() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userResponse = await FolderHeaderApi();

      setUserData(...userResponse.data);
    };

    fetchData();
  }, []);
  return (
    <nav className="FolderNavContainer">
      <div className="FolderNavBox">
        <img
          src={LogoImg}
          alt="홈으로 연결된 Linkbrary 로고"
          className="Folderlogo"
        />
        {userData ? (
          <div className="FolderUserContainer">
            <p className="FolderUserEmail">
              <img
                src={`${userData.image_source}`}
                alt="FolderUserImg"
                className="FolderUserImg"
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
