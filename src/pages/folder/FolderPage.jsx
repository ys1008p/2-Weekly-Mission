import { useEffect, useState } from 'react';

import SearchBar from '@/components/SearchBar';
import CommonPageLayout from '@/components/layout/CommonPageLayout';

import { useSetIsGnbFixed } from '@/contexts/LayoutContext';
import { useSetUser } from '@/contexts/UserContext';

import FolderHeader from './FolderHeader';
import FolderMain from './FolderMain';
import { getFolders, getUser } from './api';

function FolderPage() {
  const [folders, setFolders] = useState([]);
  const setUser = useSetUser();
  const setIsGnbFixed = useSetIsGnbFixed();

  useEffect(() => {
    setIsGnbFixed(false);
  });

  useEffect(() => {
    async function fetchUser() {
      const userResponse = await getUser();
      setUser(userResponse.data[0]);
    }

    fetchUser();
  }, []);

  useEffect(() => {
    async function fetchFolders() {
      const folderResponse = await getFolders();
      setFolders(folderResponse.data);
    }

    fetchFolders();
  }, []);

  return (
    <CommonPageLayout headerChildren={<FolderHeader folders={folders} />}>
      <SearchBar
        placeholder='링크를 검색해 보세요.'
        className='main__content'
      />
      <FolderMain folders={folders} className='main__content'></FolderMain>
    </CommonPageLayout>
  );
}

export default FolderPage;
