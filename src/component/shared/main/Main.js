import "./Main.css";
import CardList from "./CardList";

function Main() {
  return (
    <main className="main-container">
      <input type="text" placeholder="링크를 검색해보세요." />
      <CardList />
    </main>
  );
}

export default Main;
