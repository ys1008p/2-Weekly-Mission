import { useEffect, useState } from 'react';

import { useSetUser } from '@/contexts/UserContext';
import { getUser } from '@/pages/shared/api';

import CardList from '@/components/CardList';
import CommonPageLayout from '@/components/layout/CommonPageLayout';
import SearchBar from '@/components/SearchBar';

import { getFolders } from './api';
import SharedHeader from './SharedHeader';
import './style.css';

function SharedPage() {
  const setUser = useSetUser();
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

  useEffect(() => {
    async function fetchUser() {
      const response = await getUser();
      setUser(response);
    }

    fetchUser();
  }, []);

  return (
    <CommonPageLayout
      headerChildren={<SharedHeader folder={folder}></SharedHeader>}>
      <SearchBar
        placeholder='링크를 검색해 보세요.'
        className='main__content'
      />
      <CardList
        className='main__content shared__card-list'
        list={folder.links}
      />
    </CommonPageLayout>
  );
}

export default SharedPage;
