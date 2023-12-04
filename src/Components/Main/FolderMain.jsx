import React, { useState } from "react";
import MainSearchBar from "./MainSearchBar";
import FolderButtons from "./FolderButtons";
import FolderCardContainer from "./FolderCardContainer";
import "../../CSS/Folder.css";


export default function FolderMain() {
  const [selectedValue, setSelectedValue] = useState('전체');
  const handleSelectValue = (value) => {
    setSelectedValue(value);
  };

  return (
    <div className="FolderMain">
      <MainSearchBar />
      <FolderButtons onSelectValue={handleSelectValue}/>
      <FolderCardContainer selectedValue={selectedValue} />
    </div>
  );
}
