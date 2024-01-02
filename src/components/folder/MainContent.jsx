import { Search } from './Search';
import { FilterContent } from './FilterContent';
import { useState } from 'react';

export const MainContent = () => {
  const [keyword, setKeyword] = useState();

  return (
    <main className='link-content'>
      <div className='container share-wrapper'>
        <Search setKeyword={setKeyword} />
        <FilterContent isKeyWord={keyword} />
      </div>
    </main>
  );
};
