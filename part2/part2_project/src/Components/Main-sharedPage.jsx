import CardsList from "./CardsList";
import SearchBox from "./SearchBox";

export default function Main({ cardData }) {
  return (
    <main>
      <SearchBox />
      <CardsList className="cardList" cardData={cardData} />
    </main>
  );
}
