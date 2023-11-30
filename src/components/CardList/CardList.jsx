import './CardList.css';
import AltImage from '../../assets/alt-image.svg';
import KebabImg from '../../assets/kebab.svg';
import StarImg from '../../assets/star.svg';
import { useState } from 'react';
import { formatDate, getDiff } from '../../utils/formatTime';

function Card({ item }) {
  const { imageSource, createdAt, description, url, title } = item;
  const imageSrc = imageSource ? imageSource : AltImage;

  const nowDate = new Date();

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleClick = () => {
    window.open(url);
  };

  const className = isHovering ? 'hover' : '';

  return (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <div className="Card-thumbnail" onClick={handleClick}>
        <img src={imageSrc} alt={`${title}`} className={`Card-thumbnail-img ${className}`} />
        <img src={StarImg} alt="즐겨찾기" className="Card-star" />
      </div>
      <div className="Card-info">
        <div className="Card-info-diff-box">
          <div className="Card-info-diff">{getDiff(nowDate, createdAt)}</div>
          <img src={KebabImg} alt="케밥" />
        </div>
        <div className="Card-info-description">{description}</div>
        <div className="Card-info-createdAt">{formatDate(createdAt)}</div>
      </div>
    </div>
  );
}

export default function CardList({ links }) {
  return (
    <div>
      <ul className="CardList">
        {links.map((item) => {
          return (
            <li key={item.id} className="Card">
              <Card item={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
