import styles from './CardItem.module.css';

import getTimeDiff from '@/utils/getTimeDiff';
import { useState } from 'react';

import Kebab from '@/assets/images/icon/kebab.svg';
import NoImage from '@/assets/images/icon/no-image.svg';
import SelectedStar from '@/assets/images/icon/star-selected.svg';
import Star from '@/assets/images/icon/star.svg';

type ImageClickEventHandler = React.MouseEventHandler<HTMLImageElement>;

interface CardItemProps {
  thumbnail?: string | null;
  createdAt: string;
  title: string;
  url: string;
  isFolder: boolean;
}

const CardItem = ({
  thumbnail = NoImage,
  createdAt,
  title,
  url,
  isFolder,
}: CardItemProps) => {
  const [enlarged, setInlarged] = useState(false);
  const [selected, setSelected] = useState(false);

  const handleMouseOver = () => {
    setInlarged(true);
  };

  const handleMouseLeave = () => {
    setInlarged(false);
  };

  const handleStarClick: ImageClickEventHandler = (event) => {
    event.preventDefault();
    setSelected((prev) => !prev);
  };

  // (shared) 2023-12-02T23:35:12Z
  // (folder) 2023-10-27T02:04:53.276659+00:00
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
            src={thumbnail ?? NoImage}
            alt="thumbnail"
          />
          {isFolder ? (
            <img
              className={styles.star}
              src={selected ? SelectedStar : Star}
              onClick={handleStarClick}
              alt="star"
            />
          ) : null}
        </div>
        <div className={styles.contents}>
          <div className={styles.header}>
            <span className={styles.time}>{timeAgo}</span>
            {isFolder ? (
              <img className={styles.kebab} src={Kebab} alt="kebab" />
            ) : null}
          </div>
          <div className={styles.title}>{title}</div>
          <span className={styles.date}>{parsedDate}</span>
        </div>
      </a>
    </article>
  );
};

export default CardItem;
