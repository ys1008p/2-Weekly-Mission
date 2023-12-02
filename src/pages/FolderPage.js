// import './FolderPage.css';
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

  function handleQuery(e) {
    const chosenFolderId = e.target.dataset.key;
    setChosenFolderId(chosenFolderId);
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
  }, [chosenFolderId]);

  return (
    <div>
      <AddLinkBar />
      <SearchBar />
      <Sorting chosenFolderId={chosenFolderId} folder={folder} handleQuery={handleQuery} />
      <Cards links={links} />
    </div>
  );
}
