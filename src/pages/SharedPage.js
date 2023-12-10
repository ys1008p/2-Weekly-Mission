// SharedPage.js
import React from "react";
import InfoLoader from "../component/InfoLoader";
import SharedHeader from "../component/SharedHeader";
import SharedMain from "../component/SharedMain";

function SharedPage() {
  const { sharedFolderInfo } = InfoLoader();
  // const { links } = sharedFolderInfo;
  return (
    <>
      <SharedHeader sharedFolderInfo={sharedFolderInfo} />
      <SharedMain sharedFolderInfo={sharedFolderInfo} />
    </>
  );
}

export default SharedPage;
