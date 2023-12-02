import './style.css';
import noImage from '/images/common/no-image-placeholder.png';

import { calculateTimeDiff, formatDate } from '@/scripts/utils';
import { useEffect, useState } from 'react';

function Card({ imageSource, createdAt, description, url }) {
  const [imgUrl, setImgUrl] = useState(imageSource);

  useEffect(() => {
    const img = new Image();
    img.src = imgUrl;
    img.onload = () => setImgUrl(imgUrl); // 이미지 로드 성공 시
    img.onerror = () => setImgUrl(noImage); // 이미지 로드 실패 시
  }, [imageSource]);

  return (
    <a className="card" href={url} target="_blank">
      <div className="card__image">
        <img className="card__image--img" src={imgUrl} alt="카드 이미지" />
      </div>
      <div className="card__info">
        <span className="card__info--ago">{calculateTimeDiff(createdAt)}</span>
        <p className="card__info--desc">{description}</p>
        <span className="card__info--created-at">{formatDate(createdAt)}</span>
      </div>
    </a>
  );
}

export default Card;
