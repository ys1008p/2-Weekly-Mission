import React from "react";
import "./index.css";
import Card from "components/Card";
const Folder = () => {
  return (
    <div className="container">
      <input className="searchBar" placeholder="링크로 검색해 보세요." />
      <div className="cards">
        {Array.from({ length: 9 }).map((data, index) => {
          return <Card key={index} />;
        })}
      </div>
    </div>
  );
};

export default Folder;
