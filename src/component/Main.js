import "./Main.css";
import CardList from "./CardList";

function Main({ cardData }) {
  return (
    <main className="main-container">
      <input type="text" placeholder="링크를 검색해보세요." />
      <CardList cardData={cardData} />
    </main>
  );
}

export default Main;
