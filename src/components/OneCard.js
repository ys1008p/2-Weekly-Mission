import "../css/Card.css";

function OneCard({ imgSrc, imgAlt }) {
  return (
    <li className="card">
      <img src={imgSrc} alt={imgAlt} />
      <div className="card__text">
        <p className="card__text-time">10 minutes ago</p>
        <h3 className="card__text-content">
          Lorem Ipsum is simply dummy text of the printing and typesetting...
        </h3>
        <p className="card__text-date">2023.3.15</p>
      </div>
    </li>
  );
}

export default OneCard;
