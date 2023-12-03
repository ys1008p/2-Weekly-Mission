import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import './Folder.css';
import FolderButtons from '../components/FolderButtons';

export default function Folder() {
  const [selectedFolderId, setSelectedFolderId] = useState(null);
  const [selectedFolderName, setSelectedFolderName] = useState('전체');

  const handleFolderClick = (id, name) => {
    setSelectedFolderId(id);
    setSelectedFolderName(name);
    console.log(selectedFolderId);
    console.log(selectedFolderName);
  };

  return (
    <>
      <Navbar profileUrl='users/1' className='navbar' />
      <SearchBar />
      <FolderButtons onClick={handleFolderClick} />
    </>
  );
}
