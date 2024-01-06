import { FolderCard } from "./FolderCard";
import "../../css/main.css";
import { UserFolderList } from "../UserFolderList";

import { useState } from "react";
import SharePenDeleteContent from "./SharePenDeleteContent";
import SearchForm from "./SearchForm";

function FolderMain({
  folderInfo,
  userFolderList,
  handleModalOpen,
  handleFolderId,
}) {
  const [selectedFolderInfo, setSelectedFolderInfo] = useState([]);
  const [selectedButton, setSelectedButton] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState("전체");

  const handleFolderClick = ({ folderId, data }) => {
    setSelectedFolderInfo(data);
    setSelectedButton(true);

    if (folderId === "") {
      setSelectedFolder("전체");
    } else {
      const folder = userFolderList.find((list) => `${list.id}` === folderId);
      setSelectedFolder(folder.name);
      handleFolderId(folderId);
    }
  };

  return (
    <>
      <main>
        <SearchForm />
        {userFolderList.length > 0 && (
          <UserFolderList
            names={userFolderList}
            onFolderClick={handleFolderClick}
          />
        )}

        <SharePenDeleteContent
          selectedFolder={selectedFolder}
          handleModalOpen={handleModalOpen}
        />

        {selectedButton === false ? (
          <FolderCard data={folderInfo} handleModalOpen={handleModalOpen} />
        ) : selectedFolderInfo.length > 0 ? (
          <FolderCard
            data={selectedFolderInfo}
            handleModalOpen={handleModalOpen}
          />
        ) : (
          <div>
            <p className="noLink">선택된 폴더에 저장된 링크가 없습니다.</p>
          </div>
        )}
      </main>
    </>
  );
}

export default FolderMain;
