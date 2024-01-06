import style from '../styles/Card.module.css';
import noImage from '../assets/noImage.svg';
import star from '../assets/star.svg';
import kebab from '../assets/kebab.svg';
import { MouseEvent, useState } from 'react';
import SelectMenu from './SelectMenu';
import { dateDiff } from './util/dateDiff';
import { Link } from 'react-router-dom';
import { LinkType } from '../constants/type';

const Card = ({ link } : { link:LinkType }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const createdAt = link.createdAt || link['created_at'];
  const createdDate = new Date(createdAt);
  const createdDateString = `${createdDate.getFullYear()}. ${createdDate.getMonth() + 1}. ${createdDate.getDate()}`
  const nowDate = new Date();
  const imgSource = link.imageSource || link['image_source'];

  const handleKebobIconClick = (event:MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setMenuOpen(!menuOpen);
  }

  return(
    <Link to={link.url} target="_blank" rel='noopener noreferrer' className={`${style.card}`}>
      <img src={star} alt='bookmark icon' className={`${style['star--icon']}`} />
      <figure className={`${style['link-image--container']}`}>
        <img src={imgSource || noImage} alt="링크 이미지" className={`${style["link-image"]}`}/>
      </figure>
      <div className={`${style["link-detail--container"]}`}>
        <div className={`${style['link-created-ago--container']}`}>
          <p className={`${style['link-created-ago']}`}>{dateDiff(createdDate, nowDate)}</p>
          <button onClick={handleKebobIconClick} className={`${style.btn}`}><img src={kebab} alt='kebab icon' className={`${style['kebab--icon']}`} /></button>
        </div>
        <p className={`${style['link-description']}`}>{link.description}</p>
        <p className={`${style['link-createdat']}`}>{createdDateString}</p>
      </div>
      {menuOpen && <SelectMenu />}
    </Link>
  )
};

export default Card;
