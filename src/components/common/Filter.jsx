import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getFilterList } from '../../apis/folderList';
import { IconButton, MixButton } from '../../components/common/Button';

import { INITIAL_FILTER_DATA } from '../../store/type';
import { FLOATING_BUTTON_POSITION } from '../../store/common';

export const Filter = ({ setCurrentId, setTitle }) => {
  const [filterData, setFilterData] = useState(INITIAL_FILTER_DATA);
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
  setTitle: PropTypes.func,
  setCurrentId: PropTypes.func,
};
