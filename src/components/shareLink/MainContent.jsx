import { Search } from '../common/Search';
import { GridLayout } from './GridLayout';

export const MainContent = () => {
  return (
    <main className='link-content'>
      <div className='container share-wrapper'>
        <Search />
        <GridLayout />
      </div>
    </main>
  );
};
