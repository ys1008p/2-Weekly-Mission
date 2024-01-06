import "../css/userFolderList.css";
import FolderPlusImg from "../asset/add.svg";
import { getFolder } from "../api";

import { useState } from "react";

export function UserFolderList({ names, onFolderClick }) {
  const [selectedFolderId, setSelectedFolderId] = useState("");
  const handleFolderButtonClick = async (e) => {
    const folderId = e.currentTarget.value;
    setSelectedFolderId(folderId);
    try {
      const result = await getFolder(folderId);
      const { data } = result;
      onFolderClick({ folderId, data });
    } catch (error) {
      console.error("Error fetching folder data:", error);
    }
  };

  return (
    <div className="userFolderList">
      <div className="mapFolderList">
        <button
          value=""
          className={` mapFolderOneList ${
            selectedFolderId === "" ? "selected" : ""
          }`}
          onClick={handleFolderButtonClick}
        >
          <p>전체</p>
        </button>
        {names.map((folder) => (
          <button
            key={folder.id}
            value={folder.id}
            onClick={handleFolderButtonClick}
            className={`mapFolderOneList ${
              selectedFolderId === `${folder.id}` ? "selected" : ""
            }`}
          >
            <p>{folder.name}</p>
          </button>
        ))}
      </div>
      <button className="appendFolderButton">
        폴더추가
        <img className="plusButton" src={FolderPlusImg} alt="plusButton" />
      </button>
    </div>
  );
}
