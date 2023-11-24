import NoImage from '@/assets/images/icon/no-image.svg';
import { useState } from 'react';

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
          <span className="time">{createdAt}</span>
          <div className="title">{title}</div>
          <span className="date">{createdAt}</span>
        </div>
      </a>
    </article>
  );
};

export default CardItem;
