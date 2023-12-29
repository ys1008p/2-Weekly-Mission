import './FolderButton.css';
import { useContext } from 'react';
import { SearchContext } from '../../../context/SearchContext';
export default function FolderButton({ isFolderChosen, folderInfo, handleQuery }) {
  const { setSelectedFolder } = useContext(SearchContext);
  function handleSetFolder(e) {
    handleQuery(e);
  }
  return (
    <button
      data-key={folderInfo.id}
      data-name={folderInfo.name}
      onClick={handleSetFolder}
      className={`FolderButton ${isFolderChosen ? 'chosenFolderButton' : ''} `}
    >
      {folderInfo.name}
    </button>
  );
}
