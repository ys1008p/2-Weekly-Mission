import styles from './FolderPage.module.css';
import SearchBar from '../../components/atoms/SearchBar/SearchBar';
import CardList from '../../components/CardList/CardList';
import LinkInput from '../../components/atoms/LinkInput/LinkInput';
import FolderList from '../../components/atoms/FolderList/FolderList';
import Folder from '../../folder-mock.json';
import FolderData from '../../list-mock.json';
import FolderTitle from '../../components/atoms/FolderTitle/FolderTitle';
import { useState } from 'react';
function FolderPage() {
  const { folder } = Folder;
  const { data } = FolderData;

  const [selectedId, setSelectedId] = useState('all');
  const [folderTitle, setFolderTitle] = useState('전체');

  const handleClick = (e) => {
    setSelectedId(e.target.id);
    setFolderTitle(e.target.textContent);
  };

  return (
    <main>
      <LinkInput />
      <article className={styles.article}>
        <SearchBar />
        <FolderList data={data} selectedId={selectedId} onClick={handleClick} />
        <FolderTitle title={folderTitle} selectedId={selectedId} />
        <CardList links={folder.links} />
      </article>
    </main>
  );
}

export default FolderPage;
