import { useEffect, useState } from "react";
import { getFolders } from "../../services/api";
import FolderButton from "./FolderButton";
import FolderCardList from "./FolderCardList";
import Option from "./Option";
import addIcon from "../../assets/add-icon.svg";
import "./FolderContainer.css";

function FolderContainer() {
  const [folders, setFolders] = useState([]);
  const [selectedFolderId, setSelectedFolderId] = useState(null);
  const [selectedFolderName, setSelectedFolderName] = useState(null);

  useEffect(() => {
    const fetchLinks = async () => {
      const folder = await getFolders();

      setFolders(folder);
    };

    fetchLinks();
  }, []);

  const handleFolderClick = (folderId, folderName) => {
    setSelectedFolderId(folderId);
    setSelectedFolderName(folderName);
  };

  return (
    <div className="folders">
      <div className="folders-top">
        <div className="folder-buttons">
          <FolderButton
            folderName="전체"
            onFolderClick={handleFolderClick}
            isActive={selectedFolderId === null}
          />
          {folders.data?.map((folder) => (
            <FolderButton
              key={folder.id}
              folderId={folder.id}
              folderName={folder.name}
              onFolderClick={handleFolderClick}
            />
          ))}
        </div>
        <img className="addIcon-img" src={addIcon} alt="add icon" />
      </div>
      <div className="name-and-option">
        <div className="folder-name">{selectedFolderName}</div>
        {selectedFolderId === null || selectedFolderName === "전체" ? (
          ""
        ) : (
          <Option />
        )}
      </div>
      <FolderCardList folderId={selectedFolderId} />
    </div>
  );
}

export default FolderContainer;
