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
  const [folderQuery, setFolderQuery] = useState(undefined);

  function handleQuery(e) {
    const folderId = e.target.dataset.key;
    setFolderQuery(folderId);
  }

  async function loadFolder() {
    const { data } = await getFolder();
    setFolder(data);
  }

  async function loadLinks() {
    const { data } = await getLinks(folderQuery);
    setLinks(data);
  }

  useEffect(() => {
    loadFolder();
    loadLinks();
  }, []);

  useEffect(() => {
    loadLinks();
  }, [folderQuery]);

  return (
    <div>
      <AddLinkBar />
      <SearchBar />
      <Sorting folder={folder} handleQuery={handleQuery} />
      <Cards links={links} />
    </div>
  );
}
