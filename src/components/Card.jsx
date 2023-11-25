import React, { useState, useRef } from "react";
import defaultImg from "assets/images/defaultImage.png";
import useDateAgo from "hooks/useDateAgo";

const Card = ({ data: { createdAt, url, description, imageSource } }) => {
  //state : default, hover
  const [cardState, setCardState] = useState({
    state: "default",
    size: "Large",
  });

  const ref = useRef();

  const timeAgo = useDateAgo(createdAt);

  const date = new Date(createdAt).toLocaleDateString();

  return (
    <div
      className="card"
      onClick={() => {
        console.log(url);
      }}
    >
      <img ref={ref} src={imageSource || defaultImg} alt="card" />
      <div className="card-flavor">
        <div className="posted">{timeAgo}</div>
        <div className="card-desc">{description}</div>
        <div className="createdAt">{date}</div>
      </div>
    </div>
  );
};

export default Card;
