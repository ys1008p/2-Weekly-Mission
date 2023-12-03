import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import FolderButtons from '../components/FolderButtons';
import FolderCardList from '../components/FolderCardList';
import Footer from '../components/Footer';
import './Folder.css';
import AddLinkHeader from '../components/AddLinkHeader';
import AddLink from '../components/AddLink';

export default function Folder() {
  const [selectedFolder, setSelectedFolder] = useState({
    id: null,
    name: '전체',
  });

  console.log(selectedFolder);

  const handleFolderClick = (id, name) => {
    setSelectedFolder({ id, name });
  };

  return (
    <>
      <Navbar profileUrl='users/1' className='navbar' />
      <AddLinkHeader>
        <AddLink />
      </AddLinkHeader>
      <SearchBar />
      <FolderButtons folderId={selectedFolder.id} onClick={handleFolderClick} />
      <FolderCardList selectedFolder={selectedFolder} />
      <Footer />
    </>
  );
}
