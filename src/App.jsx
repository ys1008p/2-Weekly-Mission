import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { getUserData } from "./api/getUserData";
import GlobalStyle from "./GlobalStyles";
import Loding from "./component/loding/Loding";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Shared from "./pages/Shared";
import Folder from "./pages/Folder";
import { getUserPersonalFolderData } from "./api/getUserPersonalFolderData";
import TestLanding from "./component/TestLanding";
import { getUserPersonalLinkData } from "./api/getUserPersoanlLinkData";
import CardList from "./component/CardList";
import { transformLinkData } from "./api/dataTransform";
import NotFoundPage from "./component/NotFoundPage";

function App() {
  const [userData, setUserData] = useState({}); // 로딩을위한 전역사용
  const [personalFolderData, setPersonalFolderData] = useState([]); // folder 페이지의 폴더데이터
  const [personalLinkData, setPersonalLinkData] = useState([]); // folder 페이지의 링크데이터
  const [loding, setLoding] = useState(false);
  const [selectPersonalLinkData, setSelectPersonalLinkData] = useState([]); // 선택한 버튼의 폴더 데이터
  const [folderId, setFolderId] = useState(); // 전역사용 O
  const [folderName, setFolderName] = useState(); // 전역사용 O
  const [searchLinkValue, setSearchLinkValue] = useState(""); // 링크검색데이터
  const location = useLocation();

  const handleData = (data) => {
    setFolderId(data.id); // 폴더 아이디는 링크의 루트뒤의 id 를 뜻함
    setFolderName(data.name); // 폴더 네임은 폴더페이지의 제목을 뜻함
  };
  console.log("검색값:", searchLinkValue);
  // shared 유저데이터 & 로딩처리
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
        console.log("전체데이터:", result.data);
        if (searchLinkValue !== "") {
          const filteredData = result.data.filter((link) => {
            return (
              link.url?.includes(searchLinkValue) ||
              link.title?.includes(searchLinkValue) ||
              link.description?.includes(searchLinkValue)
            );
          });
          setPersonalLinkData(transformLinkData(filteredData));
          console.log("필터링된 데이터 : ", filteredData);
        } else {
          setPersonalLinkData(transformLinkData(result.data));
        }
      })
      .catch((e) => console.log(e));
  }, [searchLinkValue]);

  // 필터된 folder 링크데이터
  useEffect(() => {
    getUserPersonalLinkData()
      .then((result) => {
        const transformedData = transformLinkData(result.data);
        const filteredData = transformedData.filter((item) => item.folderId === folderId);
        setSelectPersonalLinkData(filteredData);
      })
      .catch(() => alert("폴더 정보를 불러오는중 에러가 발생하였습니다."));
  }, [folderId]);

  return (
    <>
      {loding && <Loding />}

      <GlobalStyle />

      <Navbar userData={userData} location={location} />
      {/* ========================================== */}
      <Routes>
        <Route path="/" element={<TestLanding />}></Route>
        <Route path="/shared" element={<Shared />} />
        {/* ========================================== */}
        <Route
          path="/folder"
          element={
            <Folder
              psFolderData={personalFolderData}
              handleData={handleData}
              folderName={folderName}
              setSearchLinkValue={setSearchLinkValue}
              searchLinkValue={searchLinkValue}
            />
          }
        >
          <Route
            path=":folderId"
            element={
              <CardList
                cardData={selectPersonalLinkData}
                psFolderData={personalFolderData}
                linkData={personalLinkData}
              />
            }
          />
          <Route
            path="/folder"
            element={
              <CardList cardData={personalLinkData} psFolderData={personalFolderData} linkData={personalLinkData} />
            }
          />
        </Route>
        {/* ========================================== */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
