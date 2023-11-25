import React from "react";
import "./index.css";
import Card from "components/Card";
import search from "assets/icons/Search.svg";

const Folder = ({ folder }) => {
  return (
    <article>
      <div className="input">
        <img src={search} alt="Search" />
        <input className="searchBar" placeholder="링크로 검색해 보세요." />
      </div>
      <div className="cards">
        {folder?.map((data) => {
          return <Card key={data.id} data={data} />;
        })}
      </div>
    </article>
  );
};

export default Folder;
