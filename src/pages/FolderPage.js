// import './FolderPage.css';
import Sorting from '../components/Sorting/Sorting';
import { Cards } from '../components/shared/Cards/Cards';
import SearchBar from '../components/shared/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { getFolder, getLinks } from '../components/fetchApi';

export default function FolderPage() {
  const [folder, setFolder] = useState([]);
  const [links, setLinks] = useState([]);

  async function loadFolder() {
    const { data } = await getFolder();
    setFolder(data);
  }

  async function loadLinks() {
    const { data } = await getLinks();
    setLinks(data);
  }

  useEffect(() => {
    loadFolder();
    loadLinks();
  }, []);

  return (
    <div>
      <SearchBar />
      <Sorting folder={folder} />
      <Cards links={links} />
    </div>
  );
}
