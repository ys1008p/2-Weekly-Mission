import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { getUserData } from "./api/getUserData";
import { getFolderData } from "./api/getFolderData";
import GlobalStyle from "./GlobalStyles";
import Loding from "./component/loding/Loding";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Shared from "./component/Shared";
import Folder from "./component/Folder";

function App() {
  const [userData, setUserData] = useState({});
  const [folderData, setFolderData] = useState({});
  const [cardData, setCardData] = useState([]);
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

  //shared 폴더데이터
  useEffect(() => {
    getFolderData()
      .then((result) => {
        setCardData(result.folder?.links);
        setFolderData(result.folder);
        console.log(result.folder);
      })
      .catch(() => alert("폴더 정보를 불러오는중 에러가 발생하였습니다."));
  }, []);

  return (
    <>
      {loding && <Loding />}
      <GlobalStyle />
      <Navbar userData={userData} location={location} />
      <Routes>
        <Route
          path="/"
          element={<Shared folderData={folderData} cardData={cardData} />}
        />
        <Route path="/folder" element={<Folder cardData={cardData} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
