import { Outlet, useLocation } from "react-router-dom";
import HeaderSearchSection from "../component/HeaderSearchSection";
import MainContainer from "../component/MainContainer";
import FolderFilterButtonList from "../component/FolderFilterButtonList";
import LinkSearchInput from "../component/LinkSearchInput";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

function Folder({ psFolderData, handleData, folderName, setSearchLinkValue, searchLinkValue, footerRef }) {
  const [sideBtnLender, setSideBtnLender] = useState(false);
  const location = useLocation();
  const headerLinkAddInput = useRef();
  const linkSearchInput = useRef();

  useEffect(() => {
    const observerLinkSearchInput = new IntersectionObserver((e) => {
      e.forEach((e) => {
        if (!e.isIntersecting) {
          headerLinkAddInput.current.style.position = "fixed";
          headerLinkAddInput.current.style.zIndex = "99";
          headerLinkAddInput.current.style.paddingTop = "2.4rem";
          headerLinkAddInput.current.style.paddingBottom = "2.4rem";
          headerLinkAddInput.current.style.bottom = "0";
          headerLinkAddInput.current.style.width = "100%";
        } else {
          headerLinkAddInput.current.style.position = "";
          headerLinkAddInput.current.style.zIndex = "";
          headerLinkAddInput.current.style.paddingTop = "";
          headerLinkAddInput.current.style.paddingBottom = "";
          headerLinkAddInput.current.style.bottom = "";
          headerLinkAddInput.current.style.width = "";
        }
      });
    });

    const observerFooter = new IntersectionObserver((e) => {
      e.forEach((e) => {
        if (e.isIntersecting) {
          headerLinkAddInput.current.style.display = "none";
        } else {
          headerLinkAddInput.current.style.display = "block";
        }
      });
    });

    observerLinkSearchInput.observe(linkSearchInput.current);
    observerFooter.observe(footerRef.current);
    return () => {
      observerLinkSearchInput.disconnect();
      observerFooter.disconnect();
    };
  });

  return (
    <>
      <HeaderSearchSection setRef={headerLinkAddInput} />
      <MainContainer>
        <LinkSearchInput setSearchLinkValue={setSearchLinkValue} value={searchLinkValue} setRef={linkSearchInput} />
        <FolderFilterButtonList
          psFolderData={psFolderData} // 폴더전체데이터
          handleData={handleData} // 누르는 버튼 데이터 보내기
          handleSideBtn={setSideBtnLender} // 각 폴더 누를때 사이드버튼 true false값 반환하는 함수
          sideBtnLender={sideBtnLender} // 사이드버튼 렌더값
          folderName={folderName} // 폴더이름표시
          location={location.pathname}
        />
        <StyledCardListBackground>
          <Outlet />
        </StyledCardListBackground>
      </MainContainer>
    </>
  );
}

const StyledCardListBackground = styled.div`
  position: relative;
  min-height: 29.5rem;
`;

export default Folder;
