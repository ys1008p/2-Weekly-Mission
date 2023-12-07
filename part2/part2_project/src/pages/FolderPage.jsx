import { useEffect, useState } from "react";
import { forUser1, TasteUser1, getUserList } from "../util/api";
import Nav from "../Components/sharing/Nav";
import Footer from "../Components/sharing/Footer";
import styled from "styled-components";
import HeaderWithInPut from "../Components/folderPage/HeaderWithInput";
import Main from "../Components/folderPage/Main_folderPage";
import "../css/index.css";

const ForFolderNav = styled(Nav)`
  position: static;
`;

export default function FolderPage() {
  const [userData, setUSerData] = useState(null);
  const [buttons, setButtons] = useState();
  const [cardData, setCardData] = useState();
  const [sortId, setSortId] = useState();

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
    console.log(data);
    setCardData(data);
  };

  useEffect(() => {
    myUser();
    getUserTasteButton();
    yorPick();
  }, []);

  return (
    <>
      <ForFolderNav userData={userData} />
      <HeaderWithInPut />
      <Main buttons={buttons} cardData={cardData} />
      <Footer />
    </>
  );
}
