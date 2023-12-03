import "../styles/nav.css";
import { getFolder } from "../BASE_URL";
import { getProfile } from "../BASE_URL";
import logoImg from "../img/logo.jpg";
import React, { useState, useEffect } from "react";
import Main from "./Main";
import SearchBar from "./SearchBar";
import { Footer } from "../footer/footer";

// const MainGap = 여기에   padding-bottm : 60px; 설정해줘서 밑에 갭이랑 같이 주기.

function App() {
  const [userType, setUserType] = useState(null);
  const [userFolderType, setUserFolderType] = useState(null);
  const [links, setLinks] = useState([]);

  const fetchData = async () => {
    try {
      const data = await getProfile();
      setUserType(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchFolder = async () => {
    try {
      const { folder } = await getFolder();
      setUserFolderType(folder);
      setLinks(folder.links);
    } catch (error) {
      console.error("Error fetching data2:", error);
    }
  };
  useEffect(() => {
    fetchFolder();
    fetchData();
  }, []);

  if (!userType) {
    return <div>Loading...</div>;
  }

  if (!userFolderType) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <nav>
        <div className="gnb">
          <a href="index.html">
            <img src={logoImg} alt="로고이미지" className="logo" />
          </a>
          <a className="cta cta-short" href="signin.html">
            <img
              src={userType.profileImageSource}
              alt="회원이미지"
              className="userImg"
            />
            <span className="userEmail">{userType.email}</span>
          </a>
        </div>
      </nav>
      <header>
        <div className="hero-header">
          <div className="proFileGap">
            <img
              src={userFolderType.owner.profileImageSource}
              alt="프로필이미지"
              className="profile"
            />
            <p className="folderUserName">{userFolderType.owner.name}</p>
          </div>
          <div className="folderName">{userFolderType.name}</div>
        </div>
      </header>
      <div className="Main">
        <SearchBar />
        <ul className="cardList">
          <Main links={links} />
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default App;
