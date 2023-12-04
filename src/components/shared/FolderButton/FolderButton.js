import './FolderButton.css';

export default function FolderButton({ isFolderChosen, folderInfo, handleQuery }) {
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
