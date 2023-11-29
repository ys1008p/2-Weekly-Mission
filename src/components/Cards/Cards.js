import './Card.css';
import Stars from '../Stars/Stars';
import logoImg from '../Gnb/logo.svg';
import { timeAgo, getYYYYMMYY, getShortDescription } from '../../utils/formatting';
import { useState } from 'react';

function EmptyCard() {
  return (
    <div className="EmptyCard">
      <img className="logoInCard" src={logoImg}></img>
    </div>
  );
}

function CardItem({ link }) {
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
          {link.imageSource ? (
            <img className={isHovering ? 'contentImg hoveredImg' : 'contentImg'} src={link.imageSource}></img>
          ) : (
            <EmptyCard className={isHovering ? 'hoveredImg' : ''} />
          )}
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

export function Cards({ folder: { links } }) {
  return (
    <div className="Cards">
      {links.map((link) => (
        <CardItem key={link.id} link={link} />
      ))}
    </div>
  );
}
