import "../../css/card.css";
import Cards from "./Card";

export default function CardsList({ cardData }) {
  console.log(cardData);
  return (
    <ul className="CardList">
      {cardData?.map((card) => (
        <li className="cardBox" key={card.id}>
          <Cards card={card} />
        </li>
      ))}
    </ul>
  );
}
