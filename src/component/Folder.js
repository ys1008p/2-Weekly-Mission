import HeaderSearchSection from "./HeaderSearchSection";
import Main from "./Main";

function Folder({ cardData, psFolderData }) {
  return (
    <>
      <HeaderSearchSection />
      <Main cardData={cardData} psFolderData={psFolderData} />
    </>
  );
}

export default Folder;
