import "../styles/Card.css";
import CARD_DEFAULT_IMG from "../assets/cardDefaultImg.svg";
import { useState } from "react";

const Card = ({ linkData }) => {
  const { createdAt, url, title, description, imageSource, elapsedTime } =
    linkData;

  const onClick = () => {
    window.open(url, "_blank");
  };
  const [isHovered, setIsHovered] = useState(false);
  const onMouseOver = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  const changeImgSize = isHovered ? "130%" : "100%";

  return (
    <div className="card" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      <div
        className="card-img"
        onClick={onClick}
        style={{
          backgroundImage: `url(${imageSource ?? CARD_DEFAULT_IMG})`,
          backgroundSize: changeImgSize,
        }}
        alt={title}
      ></div>
      <div className="card-content">
        <div className="card-elapsedtime">{elapsedTime}</div>
        <div className="card-description">{description}</div>
        <div className="card-createdAt">{createdAt}</div>
      </div>
    </div>
  );
};

export { Card };
