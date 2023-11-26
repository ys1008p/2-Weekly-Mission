import "./App.css";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import { getUserData, getUserPick } from "./Components/Api";
import { useEffect, useState } from "react";
import Header from "./Components/Haeder";

function App() {
  const [userData, setUserData] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [userPick, setUserPick] = useState(null);

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
    setUserPick({ ...userPick, links });
  };

  useEffect(() => {
    isUser();
    userInfoAll();
  }, []);
  return (
    <>
      <Nav userData={userData} />
      <Header userInfo={userInfo} />
      <Footer />
    </>
  );
}

export default App;
