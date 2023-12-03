import { useState } from 'react';
import { FolderProvider } from '../../contexts/FolderProvider';

import { Search } from '../common/Search';
import { FilterContent } from './FilterContent';

export const MainContent = () => {
  const [currentId, setCurrentId] = useState(undefined);

  return (
    <main className='link-content'>
      <div className='container share-wrapper'>
        <FolderProvider currentId={currentId}>
          <Search />
          <FilterContent currentId={currentId} setCurrentId={setCurrentId} />
        </FolderProvider>
      </div>
    </main>
  );
};
