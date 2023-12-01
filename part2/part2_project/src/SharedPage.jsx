import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import { getUserData, getUserPick } from "./util/api";
import { useEffect, useState } from "react";
import Header from "./Components/Haeder";
import Main from "./Components/Main";

function SharedPage() {
  const [userData, setUserData] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [cardData, setCardData] = useState([]);

  const isUser = async () => {
    const { email, profileImageSource } = await getUserData();
    setUserData({
      ...userData,
      email,
      profileImageSource,
    });
  };

  const userInfoAll = async () => {
    const { folder } = await getUserPick();
    const { name, owner, links } = folder;
    setUserInfo({ ...userInfo, name, owner });

    setCardData(links);
  };

  useEffect(() => {
    isUser();
    userInfoAll();
  }, []);
  console.log(cardData);
  return (
    <>
      <Nav userData={userData} />
      <Header userInfo={userInfo} />
      <Main cardData={cardData} />
      <Footer />
    </>
  );
}

export default SharedPage;
