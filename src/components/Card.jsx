import React from "react";
import cardImage from "assets/images/cardImage.png";
const Card = () => {
  return (
    <div className="card">
      <img src={cardImage} alt="card" />
      <div className="card-flavor">
        <div className="posted">10 minutes ago</div>
        <div className="card-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laborum
          eum, officiis, repellat accusantium cupiditate maiores dolore itaque
          magnam magni hic molestiae. Illum fuga velit, cumque nemo dolores
          ducimus ea.
        </div>
        <div className="createdAt">2023.3.15</div>
      </div>
    </div>
  );
};

export default Card;
