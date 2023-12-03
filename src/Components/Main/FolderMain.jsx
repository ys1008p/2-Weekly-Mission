import React from "react";
import MainSearchBar from "./MainSearchBar";
import FolderButtons from "./FolderButtons";
import FolderCardContainer from "./FolderCardContainer";
import "../../CSS/Folder.css";


export default function FolderMain() {
  return (
    <div className="FolderMain">
      <MainSearchBar />
      <FolderButtons />
      <FolderCardContainer />
    </div>
  );
}
