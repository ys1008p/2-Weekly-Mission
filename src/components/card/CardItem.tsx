import styles from './CardItem.module.css';

import getTimeDiff from '@/utils/getTimeDiff';
import { useState } from 'react';

import NoImage from '@/assets/images/icon/no-image.svg';

interface CardItemProps {
  thumbnail?: string;
  createdAt: string;
  title: string;
  url: string;
}

const CardItem = ({
  thumbnail = NoImage,
  createdAt,
  title,
  url,
}: CardItemProps) => {
  const [isZoomed, setZoom] = useState(false);

  const handleMouseOver = () => {
    setZoom(true);
  };

  const handleMouseLeave = () => {
    setZoom(false);
  };

  // (createdAt) 2023-12-02T23:35:12Z
  const timeAgo = getTimeDiff(createdAt);
  const parsedDate = createdAt.split('T')[0]?.replaceAll('-', '.');

  return (
    <article className={styles['card-item']}>
      <a
        href={url}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        target="_blank"
        rel="noreferrer"
      >
        <div
          className={styles.thumbnail}
          style={{
            backgroundImage: `url(${thumbnail})`,
            backgroundSize: isZoomed ? '130%' : 'cover',
          }}
        ></div>
        <div className={styles.contents}>
          <span className={styles.time}>{timeAgo}</span>
          <div className={styles.title}>{title}</div>
          <span className={styles.date}>{parsedDate}</span>
        </div>
      </a>
    </article>
  );
};

export default CardItem;
