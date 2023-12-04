import { useState, useEffect } from "react";
// export일땐 {}로 export default일떈 {}없이 넣어야 한다!
import { getData, getDataFile } from "./api.js";
import Header from "./components/Header.js";
import Nav from "./components/Nav.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";

import "../src/css/style.css";

//내가 데이터를 불러오면서 업데이트 할 필요도 있다.
function App() {
  const [items, setItems] = useState(null);
  const [fileItems, setFileItems] = useState(null);
  const [fileImgCardItems, setFileImgCardItems] = useState([]);

  const loadData = async () => {
    // 어디서 데이터 안에 email 이 들었다는걸 알수 있는거지?
    // A)콘솔창 fetch("")를 통해 확인하자
    const { email, profileImageSource, name } = await getData();
    setItems({
      // why spread 문법 썻을까? 그냥 items는 안되나?
      // A) setState를 하면 병합되지만 함수형 컴포넌트에서는 이전 상탯값을 지웁니다.
      // 따라서 다른 상탯값들이 지워지지 않도록, 펼침연산자(Spread Syntax)를 이용해 명시적으로 ...state를 사용해 펼쳐 넣어줘야 합니다.
      // ...items,
      email,
      profileImageSource,
      name,
    });
  };

  const loadDataFile = async () => {
    const { folder } = await getDataFile();
    const { name, owner, links } = folder;
    console.log(links);
    setFileItems({ name, owner });
    // 객체로 가져오나? 값은 배열인디???
    setFileImgCardItems(links);
  };

  useEffect(() => {
    loadData();
    loadDataFile();
  }, []);
  //▲ 근데 여기는 왜 배열을 넣었지?

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Nav items={items} />
      <Header fileItems={fileItems} />
      <Main fileImgCardItems={fileImgCardItems} />
      <Footer />
    </>
  );
}

export default App;
