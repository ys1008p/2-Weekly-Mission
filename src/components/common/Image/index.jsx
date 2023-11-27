import React from "react";
import "./styles.css";

const Image = ({ src, alt, type }) => {
  return (
    <div className="image-container">
      <img src={src} alt={alt} className={`image ${type}`} />
    </div>
  );
};

export default Image;
