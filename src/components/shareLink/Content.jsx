import { Search } from '../common/Search';
import { GridLayout } from './GridLayout';

export const Content = () => {
  return (
    <main>
      <h2 className='visually-hidden'>즐겨찾기 본문</h2>
      <div className='container share-wrapper'>
        <Search />
        <GridLayout />
      </div>
    </main>
  );
};
