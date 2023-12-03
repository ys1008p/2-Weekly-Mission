import "../styles/nav.css";
import { getFolder, getFolderList } from "../Api";
import { getProfile } from "../Api";
import logoImg from "../img/logo.jpg";
import React, { useState, useEffect } from "react";
import Main from "./Main";
import SearchBar from "./SearchBar";
import { Footer } from "../footer/footer";
// import { FolderList } from "./FolderList";

function App() {
  const [userType, setUserType] = useState(null);
  const [userFolderType, setUserFolderType] = useState(null);
  const [useFolderList, setUseFolderList] = useState([]);
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

  //데이터는 받았는데 왜 쓰질 못하니..
  //  여기 부분이 좀 많이 어려운것 같습니다. 데이터를 받아오는것, 받은 데이터를 시각화하는것.
  // 잘 이해가 되지 않으니 처음부터 막혀버리네요... 거의 못했습니다.
  // 이런 경우에 뭐가 어떻게 잘못되었는지 확인 해볼수  있는 방법이 뭐가 있을까요??
  const fetchFolderList = async () => {
    try {
      const { data } = await getFolderList();
      setUseFolderList(data);
    } catch (error) {
      console.error("Error fetching data2:", error);
    }
  };

  useEffect(() => {
    fetchFolder();
    fetchData();
    fetchFolderList();
  }, []);

  if (!userType) {
    return <div>Loading...</div>;
  }

  if (!userFolderType) {
    return <div>Loading...</div>;
  }

  // if (!useFolderList) {
  //   return <div>Loading...</div>;
  // }

  // console.log(useFolderList[0].name);

  const { owner, name } = userFolderType;
  const { email, profileImageSource } = userType;
  // 어지저찌하다 해결은 하였는데. name이 중복되는게 있어 해결해야할것같습니다.
  // 컴포넌트를 쪼개야할것같습니다.
  // const [{ name }] = useFolderList;

  return (
    <>
      <nav>
        <div className="gnb">
          <a href="index.html">
            <img src={logoImg} alt="로고이미지" className="logo" />
          </a>
          <a className="cta cta-short" href="signin.html">
            <img
              src={profileImageSource}
              alt="회원이미지"
              className="userImg"
            />
            <span className="userEmail">{email}</span>
          </a>
        </div>
      </nav>
      <header>
        <div className="hero-header">
          <div className="proFileGap">
            <img
              src={owner.profileImageSource}
              alt="프로필이미지"
              className="profile"
            />
            <p className="folderUserName">{owner.name}</p>
          </div>
          <div className="folderName">{name}</div>
        </div>
      </header>
      <div className="Main">
        <SearchBar />
        {/* <div>{user_id}</div> */}
        {/* <div>{useFolderList[0].name}</div> */}
        {/* <FolderList data={useFolderList} /> */}
        {/* <div>{useFolderList[0].name}</div> */}
        <ul className="cardList">
          <Main links={links} />
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default App;
