import { useEffect, useState } from "react";
import GlobalStyle from "./GlobalStyles";
import Loding from "./component/loding/Loding";
import { getUserData } from "./api/getUserData";
import { getFolderData } from "./api/getFolderData";
import Navbar from "./component/Navbar";
import HeaderFoloderSection from "./component/HeaderFolderSection";
import Footer from "./component/Footer";
import Main from "./component/Main";

function App() {
  const [userData, setUserData] = useState({});
  const [folderData, setFolderData] = useState({});
  const [cardData, setCardData] = useState([]);
  const [loding, setLoding] = useState(false);

  // shared 유저데이터
  useEffect(() => {
    setLoding(true);

    getUserData()
      .then((result) => {
        setUserData(result);

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
      <Navbar userData={userData} />
      <HeaderFoloderSection folderData={folderData} />
      <Main cardData={cardData} />
      <Footer />
    </>
  );
}

export default App;
