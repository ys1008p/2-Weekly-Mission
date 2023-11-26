import "./App.css";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import { getUserData, getUserPick } from "./Components/Api";
import { useEffect, useState } from "react";

function App() {
  const [userData, setUserData] = useState(null);
  const [userPick, setUserPick] = useState({});

  const isUser = async () => {
    const { email, profileImageSource } = await getUserData();
    setUserData((prevUserData) => ({
      ...prevUserData,
      email,
      profileImageSource,
    }));
  };

  const userInfo = async () => {
    const { folder } = await getUserPick();
    setUserPick({ ...userPick, folder });
  };

  useEffect(() => {
    isUser();
    userInfo();
  }, []);
  return (
    <>
      <Nav userData={userData} />
      <Footer />
    </>
  );
}

export default App;
