// SharedPage.js
import React from "react";
import SharedHeader from "../component/shared/SharedHeader";
import SharedMain from "../component/shared/SharedMain";

function SharedPage({ sharedFolderInfo }) {

  // const { links } = sharedFolderInfo;
  return (
    <>
      <SharedHeader sharedFolderInfo={sharedFolderInfo} />
      <SharedMain sharedFolderInfo={sharedFolderInfo} />
    </>
  );
}

export default SharedPage;
