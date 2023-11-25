import React from "react";
import "./index.css";
import Card from "components/Card";

const Folder = ({ folder }) => {
  return (
    <div className="container">
      <input className="searchBar" placeholder="링크로 검색해 보세요." />
      <div className="cards">
        {folder?.map((data) => {
          return <Card key={data.id} data={data} />;
        })}
      </div>
    </div>
  );
};

export default Folder;
