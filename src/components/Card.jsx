import React from "react";
import defaultImg from "assets/images/defaultImage.png";
import useDateAgo from "hooks/useDateAgo";
import Image from "./common/Image";

const Card = ({ data: { createdAt, url, description, imageSource } }) => {
  const timeAgo = useDateAgo(createdAt);
  const date = new Date(createdAt).toLocaleDateString();

  return (
    <div
      className="card-container"
      onClick={() => {
        window.open(url);
      }}
    >
      <Image src={imageSource || defaultImg} alt="card" type="card" />
      <div className="card-flavor">
        <div className="posted">{timeAgo}</div>
        <div className="card-desc">{description}</div>
        <div className="createdAt">{date}</div>
      </div>
    </div>
  );
};

export default Card;
