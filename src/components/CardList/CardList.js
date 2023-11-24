import './CardList.css';
import AltImage from '../../assets/alt-image.svg';
import { useState } from 'react';
function Card({ item }) {
  const { imageSource, createdAt, description } = item;
  const imageSrc = imageSource ? imageSource : AltImage;

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const className = isHovering ? 'hover' : '';

  return (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <div className="Card-thumbnail">
        <img src={imageSrc} alt="링크 썸네일" className={`Card-thumbnail-img ${className}`} />
      </div>
      <div>
        <div>{createdAt}</div>
        <div>{description}</div>
        <div>{createdAt}</div>
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
