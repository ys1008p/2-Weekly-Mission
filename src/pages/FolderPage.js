import './FolderPage.css';
import AddLinkBar from '../components/shared/AddLinkBar/AddLinkBar';
import SearchBar from '../components/shared/SearchBar/SearchBar';
import Sorting from '../components/Sorting/Sorting';
import { Cards } from '../components/shared/Cards/Cards';
import { useState, useEffect } from 'react';
import { getFolder, getLinks } from '../components/fetchApi';

export default function FolderPage() {
  const [folder, setFolder] = useState([]);
  const [links, setLinks] = useState([]);
  const [chosenFolderId, setChosenFolderId] = useState(undefined);
  const [chosenFolderName, setChosenFolderName] = useState('');

  function handleQuery(e) {
    const chosenFolderId = e.target.dataset.key;
    const chosenFolderName = e.target.dataset.name;
    setChosenFolderId(chosenFolderId);
    setChosenFolderName(chosenFolderName);
  }

  async function loadFolder() {
    const { data } = await getFolder();
    setFolder(data);
  }

  async function loadLinks() {
    const { data } = await getLinks(chosenFolderId);
    setLinks(data);
  }

  useEffect(() => {
    loadFolder();
    loadLinks();
  }, []);

  useEffect(() => {
    loadLinks();
  }, [chosenFolderId, chosenFolderName]);

  return (
    <div>
      <AddLinkBar />
      <SearchBar />
      <Sorting chosenFolderId={chosenFolderId} folder={folder} handleQuery={handleQuery} />
      <h1 className="folderName">{chosenFolderName}</h1>
      {links.length ? (
        <Cards links={links} />
      ) : (
        <div className="noLinks">
          <div>저장된 링크가 없습니다.</div>
        </div>
      )}
    </div>
  );
}
