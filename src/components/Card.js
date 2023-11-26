import car from "../assets/car.png";
import dog from "../assets/dog.png";
import building from "../assets/building.png";
import light from "../assets/light.png";
import table from "../assets/table.png";
import sunset from "../assets/sunset.png";
import bed from "../assets/bed.png";
import dog2 from "../assets/dog2.png";
import art from "../assets/art.png";
import OneCard from "./OneCard";
import "../css/Card.css";

function Card() {
  return (
    <ul className="cards">
      <OneCard imgSrc={car} imgAlt={car} />
      <OneCard imgSrc={dog} imgAlt={dog} />
      <OneCard imgSrc={building} imgAlt={building} />
      <OneCard imgSrc={light} imgAlt={light} />
      <OneCard imgSrc={table} imgAlt={table} />
      <OneCard imgSrc={sunset} imgAlt={sunset} />
      <OneCard imgSrc={bed} imgAlt={bed} />
      <OneCard imgSrc={dog2} imgAlt={dog2} />
      <OneCard imgSrc={art} imgAlt={art} />
    </ul>
  );
}

export default Card;
