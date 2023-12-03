import { useState } from 'react';
import PropTypes from 'prop-types';
import { useStoredData } from '../../utils/useStoredData';
import { FolderContext } from '../../contexts/FolderProvider';

import { GridLayout } from './GridLayout';
import { Filter } from '../common/Filter';
import { FilterOptions } from '../common/FilterOptions';

import { EmptyContent } from '../common/EmptyContent';

export const FilterContent = ({ currentId, setCurrentId }) => {
  const folderData = useStoredData(FolderContext);
  const [title, setTitle] = useState('전체');
  const isFolderDataEmpty = Object.keys(folderData).length === 0;

  return (
    <div className='filter-content'>
      <Filter setCurrentId={setCurrentId} setTitle={setTitle} />

      <header className='filter-content-header'>
        <h3>{title}</h3>
        {currentId && <FilterOptions />}
      </header>

      {isFolderDataEmpty ? <EmptyContent /> : <GridLayout data={folderData} />}
    </div>
  );
};

FilterContent.propTypes = {
  currentId: PropTypes.number,
  setCurrentId: PropTypes.func,
};
