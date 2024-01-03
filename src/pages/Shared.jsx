import { useEffect, useState } from "react";
import CardList from "../component/CardList";
import HeaderFoloderSection from "../component/HeaderFolderSection";
import LinkSearchInput from "../component/LinkSearchInput";
import MainContainer from "../component/MainContainer";
import { getShareCardData } from "../api/getShareCardData";
import { transformShareCardData } from "../api/dataTransform";

function Shared() {
  const [folderData, setFolderData] = useState({}); // shared 페이지의 해당 폴더데이터
  const [shareCardData, setShareCardData] = useState([]); // shared 페이지의 카드데이터

  //shared 카드데이터
  useEffect(() => {
    getShareCardData()
      .then((result) => {
        setShareCardData(transformShareCardData(result.folder.links));
        setFolderData(result.folder);
      })
      .catch(() => alert("폴더 정보를 불러오는중 에러가 발생하였습니다."));
  }, []);

  return (
    <>
      <HeaderFoloderSection folderData={folderData} />
      <MainContainer>
        <LinkSearchInput />
        <CardList cardData={shareCardData} />
      </MainContainer>
    </>
  );
}

export default Shared;
