import Stars from '../Stars';
import { timeAgo, getYYYYMMYY, getShortDescription } from '../../../utils/formatting';
import { useState } from 'react';
import emptyCard from '../Cards/images/emptyCard.jpeg';

function CardItemForShared({ link }) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className="CardItem">
      <a
        className={isHovering ? 'contentBox hoveredCard' : 'contentBox'}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        href={link.url}
        target="_blank"
      >
        <div class="imgContainer">
          <img className="contentImage" src={link.imageSource ?? emptyCard}></img>
          <Stars />
        </div>
        <section className="contentText">
          <div className="contentNav">
            <div className="timeCreated">{timeAgo(link.createdAt)}</div>
            <div className="moreInfoCebap"></div>
          </div>
          <div className="description">{getShortDescription(link.description)}</div>
          <div className="dateCreated">{getYYYYMMYY(link.createdAt)}</div>
        </section>
      </a>
    </div>
  );
}

export function CardForShared({ links }) {
  return (
    <div className="Cards">
      {links.map((link) => (
        <CardItemForShared key={link.id} link={link} />
      ))}
    </div>
  );
}
