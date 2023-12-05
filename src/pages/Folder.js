import { Outlet } from "react-router-dom";
import HeaderSearchSection from "../component/HeaderSearchSection";
import MainContainer from "../component/MainContainer";
import UserPersonalFolderList from "../component/UserPersonalFolderList";
import LinkSearchInput from "../component/LinkSearchInput";
import { useState } from "react";

function Folder({ psFolderData, handleData, folderName }) {
  const [sideBtnLender, setSideBtnLender] = useState(false);
  function handleSideBtn(data) {
    setSideBtnLender(data);
  }

  return (
    <>
      <HeaderSearchSection />
      <MainContainer>
        <LinkSearchInput />
        <UserPersonalFolderList
          psFolderData={psFolderData}
          handleData={handleData}
          handleSideBtn={handleSideBtn}
          sideBtnLender={sideBtnLender}
          folderName={folderName}
        />
        <Outlet />
      </MainContainer>
    </>
  );
}

export default Folder;
