import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import FolderButtons from '../components/FolderButtons';
import FolderCardList from '../components/FolderCardList';
import Footer from '../components/Footer';
import AddLinkHeader from '../components/AddLinkHeader';
import AddLink from '../components/AddLink';
import AddIcon from '../images/add.svg';
import styles from './Folder.module.css';

export default function Folder() {
  const [selectedFolder, setSelectedFolder] = useState({
    id: null,
    name: '전체',
  });

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
      <FolderButtons
        folderId={selectedFolder.id}
        handleFolderClick={handleFolderClick}
      />
      <FolderCardList selectedFolder={selectedFolder} />
      <Footer />
      <aside className={styles['add-floating-button']}>
        <img
          className={styles['add-floating-icon']}
          src={AddIcon}
          alt='폴터 추가 아이콘'
        />
      </aside>
    </>
  );
}
