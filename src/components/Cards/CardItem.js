import Stars from '../Stars/Stars';
import logoImg from '../Gnb/logo.svg';
import { timeAgo, getYYYYMMYY, getShortDescription } from '../../utils/formatting';

function EmptyCard() {
  return (
    <div className="EmptyCard">
      <img className="logoInCard" src={logoImg}></img>
    </div>
  );
}

export default function CardItem({ link }) {
  return (
    <a className="contentBox" href={link.url} target="_blank">
      <div class="imgContainer">
        {link.imageSource ? (
          <img className="contentImage" src={link.imageSource}></img>
        ) : (
          <EmptyCard className="hoveredImg" />
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
  );
}
