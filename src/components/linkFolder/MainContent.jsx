import { Search } from '../common/Search';
import { FilterContent } from './FilterContent';

export const MainContent = () => {
  return (
    <main className='link-content'>
      <div className='container share-wrapper'>
        <Search />
        <FilterContent />
      </div>
    </main>
  );
};
