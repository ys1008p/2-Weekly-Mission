import './Card.css';
import CardItem from './CardItem';

export function Cards({ folder: { links } }) {
  return (
    <div className="Cards">
      {links.map((link) => (
        <CardItem key={link.id} link={link} />
      ))}
    </div>
  );
}
