import '../styles/Card.css'
import noImage from '../assets/noImage.svg';
import star from '../assets/star.svg';
import kebab from '../assets/kebab.svg';

const Card = ({ link }) => {
  const createdDate = new Date(link.createdAt);
  const createdDateString = `${createdDate.getFullYear()}. ${createdDate.getMonth() + 1}. ${createdDate.getDate()}`
  const nowDate = new Date();

  const dateDiff = (createdDate, nowDate) => {
    const diff = nowDate - createdDate;

    const minutesDiff = Math.floor(diff / (1000 * 60));
    const hoursDiff = Math.floor(diff / (1000 * 60 * 60));
    const daysDiff = Math.floor(diff / (1000 * 60 * 60 * 24));
    const monthsDiff = Math.floor(daysDiff / 31);

    if(monthsDiff >= 12) {
      let diffString = monthsDiff === 12 ? '1 year ago' : `${Math.floor(monthsDiff / 12)} years ago`;
      return diffString;
    }
    if(monthsDiff < 12 && monthsDiff >= 1) {
      let diffString = monthsDiff === 1 ? '1 month ago' : `${monthsDiff} months ago`;
      return diffString;
    }
    if(daysDiff <= 30 && daysDiff >= 1) {
      let diffString = daysDiff === 1 ? '1 day ago' : `${daysDiff} days ago`;
      return diffString;
    }
    if(hoursDiff <= 23 && hoursDiff >= 1) {
      let diffString = hoursDiff === 1 ? '1 hour ago' : `${hoursDiff} hours ago`;
      return diffString;
    }
    if(minutesDiff <= 59) {
      let diffString = minutesDiff < 2 ? '1 mintue ago' : `${minutesDiff} minutes ago`;
      return diffString;
    }
  }

  return(
    <a href={link.url} target="_blank" rel='noopener noreferrer' className="card">
      <img src={star} alt='bookmark icon' className='star--icon'></img>
      <figure className="link-image--container">
        <img src={link.imageSource || noImage} alt="링크 이미지" className="link-image"/>
      </figure>
      <div className="link-detail--container">
        <div className='link-created-ago--container'>
          <p className="link-created-ago">{dateDiff(createdDate, nowDate)}</p>
          <img src={kebab} alt='kebab icon' className='kebab--icon'></img>
        </div>
        <p className="link-description">{link.description}</p>
        <p className="link-created-at">{createdDateString}</p>
      </div>
    </a>
  )
};

export default Card;
