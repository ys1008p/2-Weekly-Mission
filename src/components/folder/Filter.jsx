import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSetStoredData } from '../../utils/useStoredData';
import { FolderContext } from '../../contexts/FolderProvider';

import { MyButton, IconButton, MixButton } from '../common/Button';
import { Dialog } from '../common/Dialog';
import { Input } from '../common/Input';

import { FLOATING_BUTTON_POSITION } from '../../store/common';

export const Filter = ({ filterData, setTitle }) => {
  const { setCurrentId } = useSetStoredData(FolderContext);
  const [isActiveId, setIsActiveId] = useState(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isOverHeight, setIsOverHeight] = useState(0);

  function onScroll() {
    const floatingHeight =
      document.documentElement.scrollHeight -
      (window.innerHeight + FLOATING_BUTTON_POSITION);

    setIsOverHeight(window.scrollY > floatingHeight);
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const handleFilterClick = (id, name) => {
    setCurrentId(id);
    setIsActiveId(id);
    setTitle(name);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
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
          onClick={handleModalOpen}
        />

        <MixButton
          text='폴더 추가'
          textSize={16}
          textColor='white'
          size={16}
          color='white'
          name={`sm-add-filter ${isOverHeight && 'hide'}`}
          endIcon='ic-add'
          onClick={handleModalOpen}
        />
      </div>

      {isModalOpen && (
        <Dialog modalTitle='폴더 추가' onClose={handleModalClose}>
          <div className='modal-content'>
            <Input placeholder='내용 입력' />
            <MyButton variant='default' size='lg'>
              추가하기
            </MyButton>
          </div>
        </Dialog>
      )}
    </>
  );
};

Filter.propTypes = {
  filterData: PropTypes.array,
  setTitle: PropTypes.func,
};
