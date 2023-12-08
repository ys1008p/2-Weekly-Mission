import CardList from "../component/CardList";
import HeaderFoloderSection from "../component/HeaderFolderSection";
import LinkSearchInput from "../component/LinkSearchInput";
import MainContainer from "../component/MainContainer";

function Shared({ cardData, folderData }) {
  return (
    <>
      <HeaderFoloderSection folderData={folderData} />
      <MainContainer>
        <LinkSearchInput />
        <CardList cardData={cardData} />
      </MainContainer>
    </>
  );
}

export default Shared;
