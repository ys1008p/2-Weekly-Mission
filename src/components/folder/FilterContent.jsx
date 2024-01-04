import { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

import { useStoredData } from '../../utils/useStoredData';
import { FolderContext } from '../../contexts/FolderProvider';
import { getFilterList } from '../../apis/folderList';

import { EmptyContent } from '../common/EmptyContent';
import { GridLayout } from './GridLayout';
import { Filter } from './Filter';
import { FilterOptions } from './FilterOptions';
import { INITIAL_FILTER_DATA } from '../../store/type';

export const FilterContent = ({ isKeyWord }) => {
  const { storedData: filteredCardList, currentId } = useStoredData(FolderContext);
  const [filterData, setFilterData] = useState(INITIAL_FILTER_DATA);
  const [title, setTitle] = useState('전체');

  const isFolderDataEmpty = Object.keys(filteredCardList).length === 0;
  const foundKeyArr = ['url', 'title', 'description'];

  const searchCardList = useMemo(() => {
    if (!isKeyWord?.length) return filteredCardList;

    return filteredCardList.filter((item) =>
      foundKeyArr.some((key) =>
        item[key]?.toLowerCase().includes(isKeyWord.toLowerCase())
      )
    );
  }, [isKeyWord, filteredCardList]);

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
      <Filter filterData={filterData} setTitle={setTitle} />

      <header className='filter-content-header'>
        <h3>{title}</h3>
        {!!currentId && (
          <FilterOptions currentFolder={title} currentFolderId={currentId} />
        )}
      </header>

      {isFolderDataEmpty ? (
        <EmptyContent />
      ) : (
        <GridLayout folderData={searchCardList} filterData={filterData} />
      )}
    </div>
  );
};

FilterContent.propTypes = {
  isKeyWord: PropTypes.string,
};
