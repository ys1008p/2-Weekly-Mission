import '../styles/Card.css'
import noImage from '../assets/noImage.svg';
import star from '../assets/star.svg';
import kebab from '../assets/kebab.svg';
import { useState } from 'react';
import SelectMenu from './SelectMenu';
import { dateDiff } from './util/dateDiff';

const Card = ({ link }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const createdDate = new Date(link.createdAt || link['created_at']);
  const createdDateString = `${createdDate.getFullYear()}. ${createdDate.getMonth() + 1}. ${createdDate.getDate()}`
  const nowDate = new Date();

  const handleKebobIconClick = (event) => {
    event.preventDefault();
    setMenuOpen(!menuOpen);
  }


  return(
    <a href={link.url} target="_blank" rel='noopener noreferrer' className="card">
      <img src={star} alt='bookmark icon' className='star--icon' />
      <figure className="link-image--container">
        <img src={(link.imageSource || link['image_source']) || noImage} alt="링크 이미지" className="link-image"/>
      </figure>
      <div className="link-detail--container">
        <div className='link-created-ago--container'>
          <p className="link-created-ago">{dateDiff(createdDate, nowDate)}</p>
          <button onClick={handleKebobIconClick}><img src={kebab} alt='kebab icon' className='kebab--icon' /></button>
        </div>
        <p className="link-description">{link.description}</p>
        <p className="link-created-at">{createdDateString}</p>
      </div>
      {menuOpen && <SelectMenu />}
    </a>
  )
};

export default Card;
