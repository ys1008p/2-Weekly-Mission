import style from './Card.module.css';
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
    <a className={style.card} href={url} target='_blank'>
      <button className={style.star}></button>
      <div className={style.imageContainer}>
        <img className={style.img} src={imgUrl} alt='카드 이미지' />
      </div>
      <div className={style.infoContainer}>
        <span className={style.ago}>{calculateTimeDiff(createdAt)}</span>
        <p className={style.desc}>{description || 'No description'}</p>
        <span className={style.createdAt}>{formatDate(createdAt)}</span>
      </div>
    </a>
  );
}

export default Card;
