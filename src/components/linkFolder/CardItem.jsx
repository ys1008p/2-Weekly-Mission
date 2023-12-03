import { useState } from 'react';
import PropTypes from 'prop-types';

import { getDateDiff } from '../../utils/convertDate';
import { formatDate } from '../../utils/formatDate';
import { IconButton } from '../common/Button';

import { IMAGE_URL, ICON } from '../../store/common';
import { SELECT_MENU } from '../../store/common';

export const CardItem = ({ url, image_source, title, created_at, description }) => {
  const [toggle, setToggle] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const { empty } = IMAGE_URL;
  const { star } = ICON;

  const handleStarToggleClick = () => {
    setToggle(!toggle);
  };

  const handleMenuClick = () => {
    setIsActive(!isActive);
  };

  const handleMenuBlur = () => {
    setIsActive(false);
  };

  return (
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
            <div className='card-item-menu' onBlur={handleMenuBlur}>
              <IconButton
                icon='ic-more'
                size={21}
                color='gray-90'
                label='더보기 버튼'
                onClick={handleMenuClick}
              />
              <ul className={isActive ? 'select-menu is-active' : 'select-menu'}>
                {SELECT_MENU.map((item) => (
                  <li key={item.id} className='select-menu-item'>
                    <button>{item.name}</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p>{description}</p>
          <span className='textBox-date'>{formatDate(created_at)}</span>
        </div>
      </div>
    </div>
  );
};

CardItem.propTypes = {
  url: PropTypes.string,
  image_source: PropTypes.string,
  title: PropTypes.string,
  created_at: PropTypes.string,
  description: PropTypes.string,
};
