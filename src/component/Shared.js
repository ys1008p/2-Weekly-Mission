import CardList from "./CardList";
import HeaderFoloderSection from "./HeaderFolderSection";
import LinkSearchInput from "./LinkSearchInput";
import MainContainer from "./MainContainer";

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
