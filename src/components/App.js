import { useState, useEffect } from "react";
import "./App.css";
import logoImg from "../assets/logo.svg";
import search from "../assets/Search.svg";
import ShowAll from "./ShowAll";
import Footer from "./Foot";

function App() {
  const [profileData, setProfileData] = useState(null);
  const [folderData, setFolderData] = useState(null);

  useEffect(() => {
    fetch("https://bootcamp-api.codeit.kr/api/sample/user")
      .then((response) => response.json())
      .then((data) => setProfileData(data))
      .catch((error) => console.error("Profile data error", error));

    fetch("https://bootcamp-api.codeit.kr/api/sample/folder")
      .then((response) => response.json())
      .then((data) => setFolderData(data.folder))
      .catch((error) => console.error("Folder data error", error));
  }, []);

  return (
    <div className="App">
      <nav className="App-nav">
        <div className="App-nav-container">
          <a href="../week5/index.html">
            <img className="logo" src={logoImg} />
          </a>
          <a href="#" className="profile">
            {profileData && (
              <>
                <img
                  className="profileImg"
                  src={profileData.profileImageSource}
                />
                <span>{profileData.email}</span>
              </>
            )}
            {!profileData && <a className="loginBtn">로그인</a>}
          </a>
        </div>
      </nav>
      <header>
        <div className="user">
          <div className="myInfo">
            <div className="myImgBg">
              {folderData && (
                <img
                  className="myImg"
                  src={folderData.owner.profileImageSource}
                />
              )}
            </div>
            {folderData && <span>{folderData.owner.name}</span>}
          </div>
          {folderData && <div>{folderData.name}</div>}
        </div>
      </header>
      <div className="App-container">
        <div className="search">
          <img src={search} />
          <span> 링크를 검색해 보세요.</span>
        </div>
        <ShowAll />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
