import React, { useEffect, useState } from 'react';
import emptyImage from '../images/emptyImage.svg';
import './Card.css';

export default function Card({
  link: { title, createdAt, description, imageSource, url },
}) {
  const [logTime, setLogTime] = useState('');

  const date = getDate(createdAt);

  useEffect(() => {
    setLogTime(getLogTime(createdAt));
  }, [createdAt]);

  return (
    <a className='card' href={url} target='_blank' rel='noreferrer noopener'>
      <div className='card-image-container'>
        {imageSource ? (
          <img className='card-image' src={imageSource} alt={title} />
        ) : (
          <img
            className='card-image'
            src={emptyImage}
            alt={`비어있는 ${title} 이미지`}
          />
        )}
      </div>
      <div className='card-info'>
        <p className='card-log-time'>{logTime}</p>
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
