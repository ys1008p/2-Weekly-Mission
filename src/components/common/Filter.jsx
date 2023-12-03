import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getFilterList } from '../../apis/folderList';
import { IconButton, MixButton } from '../../components/common/Button';

import { INITIAL_FILTER_DATA } from '../../store/type';

export const Filter = ({ setCurrentId, setTitle }) => {
  const [filterData, setFilterData] = useState(INITIAL_FILTER_DATA);
  const [isActiveId, setIsActiveId] = useState(undefined);

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
        name='sm-add-filter'
        endIcon='ic-add'
      />
    </div>
  );
};

Filter.propTypes = {
  setTitle: PropTypes.func,
  setCurrentId: PropTypes.func,
};
