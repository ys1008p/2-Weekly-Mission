import { useEffect, useState } from "react";
import { getFolders } from "../../services/api";
import FolderButton from "./FolderButton";
import FolderCardList from "./FolderCardList";
import Option from "./Option";
import addIcon from "../../assets/add-icon.svg";
import "./FolderContainer.css";

function FolderContainer() {
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState({
    id: null,
    name: null,
  });

  useEffect(() => {
    const fetchFolders = async () => {
      const folder = await getFolders();

      setFolders(folder);
    };

    fetchFolders();
  }, []);

  const handleFolderClick = ({ folderId, folderName }) => {
    setSelectedFolder({ id: folderId, name: folderName });
  };

  const isFolderSelected =
    selectedFolder.id !== null && selectedFolder.name !== "전체";

  console.log(selectedFolder.id);

  return (
    <div className="folders">
      <div className="folders-top">
        <div className="folder-buttons">
          <FolderButton
            folderName="전체"
            onFolderClick={handleFolderClick}
            isActive={selectedFolder.id === null}
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
        <div className="folder-name">{selectedFolder.name}</div>
        {isFolderSelected ? <Option /> : null}
      </div>
      <FolderCardList folderId={selectedFolder.id} />
    </div>
  );
}

export default FolderContainer;
