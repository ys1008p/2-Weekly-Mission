import PropTypes from 'prop-types';
import { formatDate } from '../../utils/formatDate';
import { getDateDiff } from '../../utils/convertDate';

export const CardItem = ({ createdAt, url, title, description, imageSource }) => {
  return (
    <div className='card-item'>
      <a href={url} className='card-item-content' target='_blank' rel='noreferrer'>
        <div className='card-item-img'>
          <img src={imageSource} alt={title} loading='lazy' />
        </div>
        <div className='card-item-textBox'>
          <span className='textBox-timestamp'>{getDateDiff(createdAt)}</span>
          <p>{description}</p>
          <span className='textBox-date'>{formatDate(createdAt)}</span>
        </div>
      </a>
    </div>
  );
};

CardItem.propTypes = {
  createdAt: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  imageSource: PropTypes.string,
};
