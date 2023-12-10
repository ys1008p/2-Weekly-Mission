import "../css/userFolderList.css";
import FolderPlusImg from "../asset/add.svg";
import { getFolder } from "../api";

import { useState } from "react";

export function UserFolderList({ names, onFolderClick }) {
  const [selectedFolderId, setSelectedFolderId] = useState("");

  const handleFolderButtonClick = (e) => {
    const folderId = e.currentTarget.value;
    setSelectedFolderId(folderId);

    // 여기서 선택된 폴더 아이디로 API를 호출
    getFolder(folderId)
      .then((result) => {
        const { data } = result;
        onFolderClick(data, true);
        console.log(data, "받아온값");
      })
      .catch((error) => {
        console.error("Error fetching folder data:", error);
      });
  };
  return (
    <div className="userFolderList">
      <div className="mapFolderList">
        <button
          value=""
          className="mapFolderOneList"
          onClick={handleFolderButtonClick}
        >
          <p>전체</p>
        </button>
        {names.map((folder) => (
          <button
            key={folder.id}
            value={folder.id}
            className="mapFolderOneList"
            onClick={handleFolderButtonClick}
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
