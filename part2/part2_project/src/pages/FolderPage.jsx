import { useEffect, useState } from "react";
import { forUser1, TasteUser1, getUserList } from "../util/api";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

import HeaderWithInPut from "../Components/HeaderWithInput";
import Main from "../Components/Main_folderPage";
import "../css/index.css";

export default function FolderPage() {
  const [userData, setUSerData] = useState(null);
  const [buttons, setButtons] = useState();
  const [cardData, setCardData] = useState();

  const myUser = async () => {
    const { data } = await forUser1();
    const { email, image_source: profileImageSource } = data.at(0);

    setUSerData({ ...userData, email, profileImageSource });
  };

  const getUserTasteButton = async () => {
    const { data } = await TasteUser1();

    return setButtons(data);
  };

  const yorPick = async () => {
    const { data } = await getUserList();
    setCardData(data);
  };

  useEffect(() => {
    myUser();
    getUserTasteButton();
    yorPick();
  }, []);

  return (
    <>
      <Nav userData={userData} />
      <HeaderWithInPut />
      <Main buttons={buttons} cardData={cardData} />
      <Footer />
    </>
  );
}
