import { useState } from "react";
import "./FolderButton.css";

function FolderButton({ folderId, folderName, onFolderClick }) {
  const [isActive, setIsActive] = useState(false);

  const handleFolderClick = () => {
    setIsActive(!isActive);
    onFolderClick(folderId, folderName);
  };

  return (
    <button className="folder-button" onClick={handleFolderClick}>
      {folderName}
    </button>
  );
}

export default FolderButton;
