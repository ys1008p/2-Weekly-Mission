import Card from "./Card";
import "./Main.css";

function CardList({ cardData }) {
  return (
    <div className="card-main-container">
      {cardData.map((data) => (
        <Card key={data.id} data={data} />
      ))}
    </div>
  );
}

export default CardList;
