import HeaderSearchSection from "./HeaderSearchSection";
import Main from "./Main";

function Folder({ cardData }) {
  return (
    <>
      <HeaderSearchSection />
      <Main cardData={cardData} />
    </>
  );
}

export default Folder;
