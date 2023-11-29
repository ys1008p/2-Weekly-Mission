import "../styles/Main.css";
import imageDefault from "../assets/defaule.png";

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
          <div className="content-info-text">
            <p className="calc-time">10 minutes ago</p>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc
              consequat.
            </p>
            <p className="date">2023. 3. 15</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
