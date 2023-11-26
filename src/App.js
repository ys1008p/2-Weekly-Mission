import { useEffect, useState } from "react";
import Footer from "./component/shared/footer/Footer";
import Header from "./component/shared/header/Header";
import Main from "./component/shared/main/Main";
import GlobalStyle from "./GlobalStyles";
import Loding from "./component/loding/Loding";

function App() {
  //유저데이터 불러오기
  const [userData, setUserData] = useState({});
  // 로딩구현
  const [loding, setLoding] = useState();
  // 사이드 이펙트 처리 & 데이터 GET
  useEffect(() => {
    async function getServerData() {
      setLoding(true);
      try {
        const res = await fetch(
          "https://bootcamp-api.codeit.kr/api/sample/user"
        );
        const data = await res.json();
        setUserData(data);
        // 로딩완료시 로딩창 안 보이게
        setLoding(false);
      } catch (e) {
        console.log("에러 :" + e);
      }
    }

    getServerData();
  }, []);

  const renderHeader = !loding && <Header userData={userData} />;
  const renderMain = userData.id && !loding && <Main />;
  const renderFooter = !loding && <Footer />;

  return (
    <>
      {loding && <Loding />}
      <GlobalStyle />
      {renderHeader}
      {renderMain}
      {renderFooter}
    </>
  );
}

export default App;
