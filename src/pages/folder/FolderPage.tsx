import { useEffect, useState } from 'react';

import CommonPageLayout from '@/components/layout/CommonPageLayout';

import { useSetIsGnbFixed } from '@/contexts/LayoutContext';
import { useSetUser } from '@/contexts/UserContext';

import { Folder } from '@/types/folder';

import FolderHeader from './FolderHeader';
import FolderMain from './FolderMain';
import { getFolders, getUser } from './api';

function FolderPage() {
  const [folders, setFolders] = useState<Folder[]>([]);
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
      <FolderMain folders={folders} className='main__content'></FolderMain>
    </CommonPageLayout>
  );
}

export default FolderPage;
