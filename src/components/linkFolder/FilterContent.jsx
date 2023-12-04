import { useState, useEffect } from 'react';
import { useStoredData } from '../../utils/useStoredData';
import { FolderContext } from '../../contexts/FolderProvider';
import { getFilterList } from '../../apis/folderList';

import { GridLayout } from './GridLayout';
import { Filter } from '../common/Filter';
import { FilterOptions } from '../common/FilterOptions';
import { INITIAL_FILTER_DATA } from '../../store/type';
import { EmptyContent } from '../common/EmptyContent';

export const FilterContent = () => {
  const { storedData, currentId } = useStoredData(FolderContext);

  const [filterData, setFilterData] = useState(INITIAL_FILTER_DATA);
  const [title, setTitle] = useState('전체');
  const isFolderDataEmpty = Object.keys(storedData).length === 0;

  useEffect(() => {
    const getData = async () => {
      try {
        const initData = await getFilterList();
        setFilterData(initData);
      } catch (e) {
        console.error(e);
      }
    };

    getData();
  }, []);

  return (
    <div className='filter-content'>
      <Filter data={filterData} setTitle={setTitle} />

      <header className='filter-content-header'>
        <h3>{title}</h3>
        {currentId && <FilterOptions />}
      </header>

      {isFolderDataEmpty ? <EmptyContent /> : <GridLayout data={storedData} />}
    </div>
  );
};
