import { Outlet, useLocation } from "react-router-dom";
import HeaderSearchSection from "../component/HeaderSearchSection";
import MainContainer from "../component/MainContainer";
import FolderFilterButtonList from "../component/FolderFilterButtonList";
import LinkSearchInput from "../component/LinkSearchInput";
import { useState } from "react";

function Folder({ psFolderData, handleData, folderName }) {
  const [sideBtnLender, setSideBtnLender] = useState(false);
  const location = useLocation();

  return (
    <>
      <HeaderSearchSection />
      <MainContainer>
        <LinkSearchInput />
        <FolderFilterButtonList
          psFolderData={psFolderData} // 폴더전체데이터
          handleData={handleData} // 누르는 버튼 데이터 보내기
          handleSideBtn={setSideBtnLender} // 각 폴더 누를때 사이드버튼 true false값 반환하는 함수
          sideBtnLender={sideBtnLender} // 사이드버튼 렌더값
          folderName={folderName} // 폴더이름표시
          location={location.pathname}
        />
        <Outlet />
      </MainContainer>
    </>
  );
}

export default Folder;
