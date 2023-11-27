import "./Main.css";
import Card from "./Card";

function Main() {
  return (
    <main className="main-container">
      <input type="text" placeholder="링크를 검색해보세요." />
      <Card />
    </main>
  );
}

export default Main;
