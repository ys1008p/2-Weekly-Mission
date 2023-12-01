import './style.css';

import { useEffect, useState } from 'react';

import CardList from '@/components/CardList/CardList';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar/SearchBar';
import { UserProvider } from '@/contexts/UserContext';

import SharedTitle from './SharedTitle';
import { getFolders } from './api';

function SharedPage() {
  const [folder, setFolder] = useState({
    name: '',
    owner: { name: '' },
    links: [],
  });

  useEffect(() => {
    async function fetchFolders() {
      const response = await getFolders();
      setFolder(response?.folder);
    }

    fetchFolders();
  }, []);

  return (
    <UserProvider>
      <Header>
        <SharedTitle folder={folder}></SharedTitle>
      </Header>
      <main className="main">
        <SearchBar placeholder="링크를 검색해 보세요." className="main__content" />
        <CardList className="main__content shared__card-list" list={folder.links} />
      </main>
      <Footer />
    </UserProvider>
  );
}

export default SharedPage;
