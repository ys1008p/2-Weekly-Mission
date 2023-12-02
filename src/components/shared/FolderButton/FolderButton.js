import { useEffect, useState } from 'react';
import useToggle from '../../../hooks/useToggle';
import './FolderButton.css';

export default function FolderButton({ isFolderChosen, folderInfo, handleQuery }) {
  function handleSetFolder(e) {
    console.log('isFolderChosen', isFolderChosen);
    handleQuery(e);
  }
  return (
    <button
      data-key={folderInfo.id}
      onClick={handleSetFolder}
      className={`FolderButton ${isFolderChosen ? 'chosenFolderButton' : ''} `}
    >
      {` ${folderInfo.id}`}
    </button>
  );
}
