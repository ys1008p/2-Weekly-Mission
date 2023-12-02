import "../styles/Main.css";
import imageDefault from "../assets/defaule.png";
import Items from "./Items";

function Main() {
  return (
    <section className="contents-structure">
      <div className="contents-box">
        <div className="content-card">
          <img
            className="content-image"
            src={imageDefault}
            alt="default-image"
          />
          <Items />
        </div>
      </div>
    </section>
  );
}

export default Main;
