import './Card.css';
import logoImg from '../Gnb/logo.svg';
import { timeAgo, getYYYYMMYY, getShortDescription } from '../../utils/formatting';

function EmptyCard() {
  return (
    <div className="EmptyCard">
      <img className="logoInCard" src={logoImg}></img>
    </div>
  );
}

function CardItem({ link }) {
  return (
    <div className="CardItem">
      <a className="contentBox" href={link.url} target="_blank">
        <div class="imgContainer">
          {link.imageSource ? <img className="contentImg" src={link.imageSource}></img> : <EmptyCard />}
        </div>
        <div className="starIcon"></div>
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

export function Cards({ items: { links } }) {
  return (
    <div className="Cards">
      {links.map((link) => (
        <CardItem key={link.id} link={link} />
      ))}
    </div>
  );
}
