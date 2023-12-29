import './FolderButton.css';
import { useContext } from 'react';
import { SearchContext } from '../../../context/SearchContext';
export default function FolderButton({ isFolderChosen, folderInfo }) {
  const { setSelectedFolder } = useContext(SearchContext);
  function handleSetFolder({ target }) {
    setSelectedFolder({ id: target.dataset.key, name: target.dataset.name });
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
