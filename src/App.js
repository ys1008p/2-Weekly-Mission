import { useEffect, useState } from "react";
import GlobalStyle from "./GlobalStyles";
import Loding from "./component/loding/Loding";
import { getUserData } from "./api/getUserData";

function App() {
  const [userData, setUserData] = useState({});
  const [loding, setLoding] = useState(false);

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

  return (
    <>
      {loding && <Loding />}
      <GlobalStyle />
    </>
  );
}

export default App;
