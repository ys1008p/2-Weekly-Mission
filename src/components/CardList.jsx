import Card from './Card';
import './CardList.css';

export default function CardList({ links }) {
  const listItems = links.map((link) => (
    <li key={link.id}>
      <Card link={link} />
    </li>
  ));

  return <ul className='cards'>{listItems}</ul>;
}
