import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSetStoredData } from '../../utils/useStoredData';
import { FolderContext } from '../../contexts/FolderProvider';

import { IconButton, MixButton } from '../../components/common/Button';
import { FLOATING_BUTTON_POSITION } from '../../store/common';

export const Filter = ({ filterData, setTitle }) => {
  const { setCurrentId } = useSetStoredData(FolderContext);
  const [isActiveId, setIsActiveId] = useState(undefined);

  const [position, setPosition] = useState(0);
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);
  const [totalHeight, setTotalHeight] = useState(document.documentElement.scrollHeight);

  function onScroll() {
    setPosition(~~window.scrollY);
  }

  function onResize() {
    setInnerHeight(~~window.innerHeight);
    setTotalHeight(~~document.documentElement.scrollHeight);
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const handleFilterClick = (id, name) => {
    setCurrentId(id);
    setIsActiveId(id);
    setTitle(name);
  };

  const floatingHeight = totalHeight - (innerHeight + FLOATING_BUTTON_POSITION);
  const isOverHeight = position > floatingHeight;

  return (
    <div className='filter'>
      <ul className='filter-list'>
        <li className='filter-list-item'>
          <button
            className={`filter-outlined filter-lg ${
              isActiveId === undefined && 'is-active'
            }`}
            onClick={() => handleFilterClick(undefined, '전체')}
          >
            전체
          </button>
        </li>
        {filterData.map((item) => (
          <li
            key={item.id}
            className='filter-list-item'
            onClick={() => handleFilterClick(item.id, item.name)}
          >
            <button
              className={`filter-outlined filter-lg ${
                isActiveId === item.id && 'is-active'
              }`}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>

      <IconButton
        icon='ic-add'
        name='lg-add-filter'
        size={16}
        color='primary'
        label='폴더 필터 추가 버튼'
      />

      <MixButton
        text='폴더 추가'
        textSize={16}
        textColor='white'
        size={16}
        color='white'
        name={`sm-add-filter ${isOverHeight && 'hide'}`}
        endIcon='ic-add'
      />
    </div>
  );
};

Filter.propTypes = {
  filterData: PropTypes.array,
  setTitle: PropTypes.func,
  setCurrentId: PropTypes.func,
};
