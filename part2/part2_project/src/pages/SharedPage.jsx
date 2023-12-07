import Nav from "../Components/sharing/Nav";
import Footer from "../Components/sharing/Footer";
import { getUserData, getUserPick } from "../util/api";
import { useEffect, useState } from "react";
import Header from "../Components/sharedPage/Haeder_sharedPage";
import Main from "../Components/sharedPage/Main-sharedPage";

function SharedPage() {
  const [userInfo, setUserInfo] = useState(null);
  const [cardData, setCardData] = useState([]);
  const [userData, setUserData] = useState();

  const isUser = async () => {
    const { email, profileImageSource } = await getUserData();
    setUserData({
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
