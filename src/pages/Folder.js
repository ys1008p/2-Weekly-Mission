import { Outlet } from "react-router-dom";
import HeaderSearchSection from "../component/HeaderSearchSection";
import MainContainer from "../component/MainContainer";
import UserPersonalFolderList from "../component/UserPersonalFolderList";
import LinkSearchInput from "../component/LinkSearchInput";

function Folder({ psFolderData, handleId }) {
  return (
    <>
      <HeaderSearchSection />
      <MainContainer>
        <LinkSearchInput />
        <UserPersonalFolderList
          psFolderData={psFolderData}
          handleId={handleId}
        />
        <Outlet />
      </MainContainer>
    </>
  );
}

export default Folder;
