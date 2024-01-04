import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getDateDiff } from '../../utils/convertDate';
import { formatDate } from '../../utils/formatDate';
import { onClickOutside } from '../../utils/onClickOutside';

import { MyButton, IconButton } from '../common/Button';
import { Dialog } from '../common/Dialog';
import { FolderList } from './FolderList';

import { IMAGE_URL, ICON } from '../../store/common';
import { SELECT_MENU } from '../../store/common';

const { empty } = IMAGE_URL;
const { star } = ICON;

export const CardItem = ({
  url,
  image_source,
  title,
  created_at,
  description,
  filterData,
}) => {
  const [toggle, setToggle] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [modalType, setModalType] = useState(null);
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      onClickOutside(e, selectRef, handleClose);
    };
    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, []);

  const handleModalType = (type) => {
    setModalType(type);
  };

  const handleModalClose = () => {
    setModalType(null);
  };

  const handleStarToggleClick = () => {
    setToggle(!toggle);
  };

  const handleMenuClick = () => {
    setIsActive((prev) => !prev);
  };

  const handleClose = () => {
    setIsActive(false);
  };

  return (
    <>
      <div className='card-item'>
        <IconButton
          img={toggle ? star.active.url : star.default.url}
          alt={toggle ? star.active.alt : star.default.alt}
          size={34}
          color='default'
          label='즐겨찾기 버튼'
          onClick={handleStarToggleClick}
        />
        <div className='card-item-content'>
          <a className='card-item-img' href={url} target='_blank' rel='noreferrer'>
            <img src={image_source || empty.url} alt={title} loading='lazy' />
          </a>

          <div className='card-item-textBox'>
            <div>
              <span className='textBox-timestamp'>{getDateDiff(created_at)}</span>
              <div className='card-item-menu' ref={selectRef}>
                <IconButton
                  icon='ic-more'
                  size={21}
                  color='gray-90'
                  label='더보기 버튼'
                  onClick={handleMenuClick}
                />
                <ul className={`select-menu ${isActive ? 'is-active' : 'hide'}`}>
                  {SELECT_MENU.map((item) => (
                    <li key={item.id} className='select-menu-item' onClick={handleClose}>
                      <button onClick={() => handleModalType(item.type)}>
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p>
              <a href={url} target='_blank' rel='noreferrer'>
                {description}
              </a>
            </p>
            <span className='textBox-date'>{formatDate(created_at)}</span>
          </div>
        </div>
      </div>

      {modalType === 'remove' && (
        <Dialog onClose={handleModalClose} modalTitle='링크 삭제' subTitle={url}>
          <div className='modal-content'>
            <MyButton variant='remove' size='lg'>
              삭제하기
            </MyButton>
          </div>
        </Dialog>
      )}

      {modalType === 'add' && (
        <Dialog onClose={handleModalClose} modalTitle='폴더에 추가' subTitle={url}>
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

CardItem.propTypes = {
  url: PropTypes.string,
  image_source: PropTypes.string,
  title: PropTypes.string,
  created_at: PropTypes.string,
  description: PropTypes.string,
  filterData: PropTypes.array,
};
