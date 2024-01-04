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

    Promise.all([getUser(), getFolders()]).then(
      ([userResponse, folderResponse]) => {
        setUser(userResponse.data[0]);
        setFolders(folderResponse.data);
      },
    );
  }, []);

  return (
    <CommonPageLayout headerChildren={<FolderHeader folders={folders} />}>
      <FolderMain folders={folders} className='main__content'></FolderMain>
    </CommonPageLayout>
  );
}

export default FolderPage;
