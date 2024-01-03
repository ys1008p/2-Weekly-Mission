import { useState, useEffect } from 'react';
import { getFilterList } from '../../apis/folderList';

import { ICON } from '../../store/common';
import { Dialog } from '../common/Dialog';
import { Button, MyButton } from '../common/Button';
import { FolderList } from './FolderList';

import { INITIAL_FILTER_DATA } from '../../store/type';

const { liked } = ICON;

export const AddLinkForm = () => {
  const [input, setInput] = useState('');
  const [filterData, setFilterData] = useState(INITIAL_FILTER_DATA);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <>
      <form className='link-form'>
        <div className='link-input'>
          <img src={liked.url} alt={liked.alt} aria-hidden />
          <input
            type='text'
            name='link-url'
            value={input}
            placeholder='링크를 추가해 보세요'
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <Button text='추가하기' className='btn-add-link' onClick={handleModalOpen} />
      </form>

      {isModalOpen && (
        <Dialog onClose={handleModalClose} modalTitle='폴더에 추가' subTitle={input}>
          <div className='modal-content'>
            <FolderList folderList={filterData} />
            <MyButton variant='default' size='lg'>
              추가하기
            </MyButton>
          </div>
        </Dialog>
      )}
    </>
  );
};
