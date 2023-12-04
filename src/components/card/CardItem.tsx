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
  const [enlarged, setInlarged] = useState(false);

  const handleMouseOver = () => {
    setInlarged(true);
  };

  const handleMouseLeave = () => {
    setInlarged(false);
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
        <div className={styles['img-box']}>
          <img
            className={`${styles.thumbnail} ${enlarged ? styles.enlarged : ''}`}
            src={thumbnail}
            alt="thumbnail"
          />
        </div>
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
