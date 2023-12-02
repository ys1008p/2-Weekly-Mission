import { useEffect, useState } from 'react';
import useToggle from '../../../hooks/useToggle';
import './FolderButton.css';

export default function FolderButton({ folderInfo, handleQuery }) {
  const isFolderChosen = false;
  function handleSetFolder(e) {
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
