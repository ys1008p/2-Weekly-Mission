import HeaderFoloderSection from "./HeaderFolderSection";
import Main from "./Main";

function Shared({ cardData, folderData }) {
  return (
    <>
      <HeaderFoloderSection folderData={folderData} />
      <Main cardData={cardData} />
    </>
  );
}

export default Shared;
