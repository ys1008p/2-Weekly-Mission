import './Card.css';
import { getFolder, getUser } from '../Api';

function CardItem({ link }) {
  return (
    <div>
      <a className="contentBox" href={link.url}>
        <section>
          <img className="contentImg" src={link.imageSource}></img>
        </section>
        <div className="starIcon"></div>
        <section className="contentText">
          <div className="contentNav">
            <div className="timeCreated">{link.createdAt}</div>
            <div className="moreInfoCebap"></div>
          </div>
          <div className="description">{link.description}</div>
          <div className="dateCreated">{link.createdAt}</div>
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
