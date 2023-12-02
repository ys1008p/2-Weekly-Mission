import Header from "../header/Header.js";
import Footer from "../footer/Footer.js";
import Main from "../main/Main.js";
import { useEffect, useState } from "react";
import { getData } from "../api/api";

function SharedPage() {
  const [profileDatas, setProfileDatas] = useState({
    id: 0,
    name: "",
    email: "",
    profileImageSource: "",
  });

  const getSampleUserData = async () => {
    try {
      const response = await getData("sample/user");
      // console.log(response, "Header");
      const { id, name, email, profileImageSource } = response;
      setProfileDatas((prevProfileDatas) => ({
        ...prevProfileDatas,
        id: id,
        name: name,
        email: email,
        profileImageSource: profileImageSource,
      }));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getSampleUserData();
  }, []);
  return (
    <>
      <Header profileDatas={profileDatas} />
      <Main />
      <Footer />
    </>
  );
}

export default SharedPage;
