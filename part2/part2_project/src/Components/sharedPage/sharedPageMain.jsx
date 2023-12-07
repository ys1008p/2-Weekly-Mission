import CardsList from "../sharing/CardsList";
import SearchBox from "../sharing/SearchBox";

export default function Main({ cardData }) {
  return (
    <main>
      <SearchBox />
      <CardsList className="cardList" cardData={cardData} />
    </main>
  );
}
