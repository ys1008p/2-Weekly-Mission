// import './SharedPage.css';
import FolderBanner from '../components/FolderBanner/FolderBanner';
import SearchBar from '../components/shared/SearchBar/SearchBar';
import { Cards } from '../components/shared/Cards/Cards';
import { useState, useEffect } from 'react';
import { getFolder, getLinks } from '../components/fetchApi';
export default function SharedPage() {
  const [user, setUser] = useState([]);
  async function loadUser() {
    const { data } = await getLinks(16);
    setUser(data);
  }

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div>
      <FolderBanner />
      <SearchBar />
      <Cards />
    </div>
  );
}
