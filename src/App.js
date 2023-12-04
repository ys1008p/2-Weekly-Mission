import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { getUserData } from "./api/getUserData";
import { getShareCardData } from "./api/getShareCardData";
import GlobalStyle from "./GlobalStyles";
import Loding from "./component/loding/Loding";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Shared from "./component/Shared";
import Folder from "./component/Folder";
import { getUserPersonalFolderData } from "./api/getUserPersonalFolderData";
import Test from "./component/Test";
import { getUserPersonalLinkData } from "./api/getUserPersoanlLinkData";
import CardList from "./component/CardList";
import { transformLinkData, transformShareCardData } from "./api/dataTransform";

function App() {
  const [userData, setUserData] = useState({});
  const [folderData, setFolderData] = useState({});
  const [shareCardData, setShareCardData] = useState([]);
  const [personalFolderData, setPersonalFolderData] = useState([]);
  const [personalLinkData, setPersonalLinkData] = useState([]);
  const [loding, setLoding] = useState(false);

  const location = useLocation();

  // shared 유저데이터
  useEffect(() => {
    setLoding(true);

    getUserData()
      .then((result) => {
        setUserData(result.data[0]);
        setLoding(false);
      })
      .catch(() => alert("회원정보를 불러오는중 에러가 발생하였습니다."))
      .finally(() => {
        setLoding(false);
      });
  }, []);

  //shared 카드데이터
  useEffect(() => {
    getShareCardData()
      .then((result) => {
        transformShareCardData(result.folder.links);
        setShareCardData(transformShareCardData);
        setFolderData(result.folder);
      })
      .catch(() => alert("폴더 정보를 불러오는중 에러가 발생하였습니다."));
  }, []);

  // folder 목록데이터
  useEffect(() => {
    getUserPersonalFolderData()
      .then((result) => {
        setPersonalFolderData(result.data);
      })
      .catch(() => alert("폴더 정보를 불러오는중 에러가 발생하였습니다."));
  }, []);

  // folder 링크데이터
  useEffect(() => {
    getUserPersonalLinkData()
      .then((result) => {
        transformLinkData(result.data);
        setPersonalLinkData(transformLinkData);
      })
      .catch(() => alert("폴더 정보를 불러오는중 에러가 발생하였습니다."));
  }, []);

  return (
    <>
      {loding && <Loding />}

      <GlobalStyle />

      <Navbar userData={userData} location={location} />
      {/* ========================================== */}
      <Routes>
        <Route path="/" element={<Test></Test>}></Route>
        <Route
          path="/shared"
          element={<Shared folderData={folderData} cardData={shareCardData} />}
        />
        {/* ========================================== */}
        <Route
          path="/folder"
          element={<Folder psFolderData={personalFolderData} />}
        >
          <Route
            path="/folder"
            element={<CardList cardData={personalLinkData} />}
          />
        </Route>
        {/* ========================================== */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
