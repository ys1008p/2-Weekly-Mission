import CardsList from '../sharing/Card/CardsList';
import SearchBox from '../sharing/SearchBox';

export default function SharedPageMain({ cardData }) {
  return (
    <main>
      <SearchBox />
      <CardsList className="cardList" cardData={cardData} />
    </main>
  );
}
