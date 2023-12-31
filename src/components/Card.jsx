import React, { useEffect, useState } from 'react';
import emptyImage from '../images/emptyImage.svg';
import StarImg from '../images/star.svg';
import KebabImg from '../images/kebab.svg';
import './Card.css';
import Dropdown from './Dropdown';

export default function Card({ link: { id, title, created_at, description, image_source, url } }) {
  const [logTime, setLogTime] = useState('');
  const [viewDropBox, setViewDropBox] = useState(false);

  const date = getDate(created_at);

  useEffect(() => {
    setLogTime(getLogTime(created_at));
  }, [created_at]);

  return (
    <a className='card' href={url} target='_blank' rel='noreferrer noopener'>
      <div className='card-image-container'>
        {image_source ? (
          <img className='card-image' src={image_source} alt={title} />
        ) : (
          <img className='card-image' src={emptyImage} alt={`비어있는 ${title} 이미지`} />
        )}
      </div>
      <button className='add-bookmark-icon'>
        <img src={StarImg} alt='즐겨찾기 추가' />
      </button>
      <div className='card-info'>
        <div className='card-time-and-kebab'>
          <p className='card-log-time'>{logTime}</p>
          <div className='kebab-container'>
            <button
              className='kebab-icon'
              onClick={(e) => {
                e.preventDefault();
                setViewDropBox(!viewDropBox);
              }}
            >
              <img src={KebabImg} alt='개별 링크 삭제 혹은 폴더에 추가하기 기능 리스트 토글' />
            </button>
            {viewDropBox && (
              <Dropdown className='dropdown-position' setViewDropBox={setViewDropBox} url={url} id={id} />
            )}
          </div>
        </div>
        <p className='card-description'>{description}</p>
        <p className='card-date'>{date}</p>
      </div>
    </a>
  );
}

function getDate(sourceTime, delimiter = '. ') {
  const date = new Date(sourceTime);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return [year, month, day].join(delimiter);
}

function getLogTime(sourcetime) {
  const createdDate = new Date(sourcetime);
  const now = new Date();
  const timeDiff = now - createdDate;

  const minutesDiff = Math.floor(timeDiff / (1000 * 60));

  if (minutesDiff < 2) {
    return '1 minute ago';
  }

  if (minutesDiff <= 59) {
    return `${minutesDiff} minutes ago`;
  }

  const hoursDiff = Math.floor(minutesDiff / 60);
  if (hoursDiff < 24) {
    return hoursDiff === 1 ? `1 hour ago` : `${hoursDiff} hours ago`;
  }

  const daysDiff = Math.floor(hoursDiff / 24);
  if (daysDiff < 31) {
    return daysDiff === 1 ? `1 day ago` : `${daysDiff} days ago`;
  }

  const monthsDiff = Math.floor(daysDiff / 31);
  if (monthsDiff < 12) {
    return monthsDiff === 1 ? `1 month ago` : `${monthsDiff} months ago`;
  }

  const yearsDiff = Math.floor(monthsDiff / 12);
  return yearsDiff === 1 ? `1 year ago` : `${yearsDiff} years ago`;
}
