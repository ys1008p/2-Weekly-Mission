import './CardList.css';
import AltImage from '../../assets/alt-image.svg';
import KebabImg from '../../assets/kebab.svg';
import StarImg from '../../assets/star.svg';
import { useState } from 'react';
import { formatDate, getDiff } from '../../utils/formatTime';

function Card({ item, isSample }) {
  const { image_source, created_at, imageSource, createdAt, description, url, title } = item;
  // 샘플 데이터인지 아닌지 체크(데이터 포맷이 달라서 하드코딩함)
  const existingImage = isSample ? imageSource : image_source;
  const existingCreatedAt = isSample ? createdAt : created_at;
  const imageSrc = existingImage ? existingImage : AltImage;

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
          <div className="Card-info-diff">{getDiff(nowDate, existingCreatedAt)}</div>
          <img src={KebabImg} alt="케밥" />
        </div>
        <div className="Card-info-description">{description}</div>
        <div className="Card-info-createdAt">{formatDate(existingCreatedAt)}</div>
      </div>
    </div>
  );
}

export default function CardList({ links, isSample }) {
  return (
    <div>
      <ul className="CardList">
        {links.map((item) => {
          return (
            <li key={item.id} className="Card">
              <Card item={item} isSample={isSample} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
