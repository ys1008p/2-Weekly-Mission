import useTimeDiff from '@/hooks/useTimeDiff';
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

  const timeAgo = useTimeDiff(createdAt);
  const parsedDate = createdAt.split('T')[0]?.replaceAll('-', '.');

  return (
    <article className="card-item">
      <a
        href={url}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="thumbnail"
          style={{
            backgroundImage: `url(${thumbnail})`,
            backgroundSize: isZoomed ? '130%' : 'cover',
          }}
        ></div>
        <div className="contents">
          <span className="time">{timeAgo}</span>
          <div className="title">{title}</div>
          <span className="date">{parsedDate}</span>
        </div>
      </a>
    </article>
  );
};

export default CardItem;
