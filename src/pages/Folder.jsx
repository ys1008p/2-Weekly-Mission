import React, { useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import FolderButtons from '../components/FolderButtons';
import FolderCardList from '../components/FolderCardList';
import Footer from '../components/Footer';
import AddLinkHeader from '../components/AddLinkHeader';
import AddLink from '../components/AddLink';
import { ReactComponent as AddIcon } from '../images/add.svg';
import styles from './Folder.module.css';

export default function Folder() {
  const [selectedFolder, setSelectedFolder] = useState({ id: null, name: '전체' });
  const [search, setSearch] = useState('');

  const [sideAddLinkbar, setSideAddLinkbar] = useState(false);
  const targets = useRef([]);

  const handleFolderClick = (id, name) => {
    setSelectedFolder({ id, name });
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.target === targets.current[0] && !entry.isIntersecting) {
        setSideAddLinkbar(true);
      }
      if (entry.target === targets.current[0] && entry.isIntersecting) {
        setSideAddLinkbar(false);
      }
      if (entry.target === targets.current[1] && entry.isIntersecting) {
        setSideAddLinkbar(false);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback);
  targets.current.forEach((target) => observer.observe(target));

  return (
    <>
      <Navbar profileUrl='users/1' className='navbar' />
      <AddLinkHeader refs={(el) => (targets.current[0] = el)} className='backgroundDefault'>
        <AddLink />
      </AddLinkHeader>
      <SearchBar search={search} setSearch={setSearch} />
      <FolderButtons folderId={selectedFolder.id} handleFolderClick={handleFolderClick} />
      <FolderCardList selectedFolder={selectedFolder} search={search} />
      <Footer refs={(el) => (targets.current[1] = el)} />
      <aside className={styles['add-floating-button']}>
        <AddIcon className={styles['add-floating-icon']} src={AddIcon} alt='폴터 추가 아이콘' fill='#e7effb' />
      </aside>
      {sideAddLinkbar && (
        <AddLinkHeader className='backgroundSide'>
          <AddLink />
        </AddLinkHeader>
      )}
    </>
  );
}
