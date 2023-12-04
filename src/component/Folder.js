import { Outlet } from "react-router-dom";
import HeaderSearchSection from "./HeaderSearchSection";
import MainContainer from "./MainContainer";
import UserPersonalFolderList from "./UserPersonalFolderList";
import LinkSearchInput from "./LinkSearchInput";
function Folder({ psFolderData }) {
  return (
    <>
      <HeaderSearchSection />
      <MainContainer>
        <LinkSearchInput />
        <UserPersonalFolderList psFolderData={psFolderData} />
        <div>
          <Outlet />
        </div>
      </MainContainer>
    </>
  );
}

export default Folder;
