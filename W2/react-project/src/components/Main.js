import "../styles/Main.css";
import CardList from "./CardList";



function Main() {
  return (
    <section className="contents-structure">
      <div className="contents-box">
        <div className="content-card">
          <CardList/>
        </div>
      </div>
    </section>
  );
}

export default Main;
