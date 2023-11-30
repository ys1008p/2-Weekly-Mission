import React from "react";
import search from "../assets/Search.svg";
import "../css/Search.css";

function Search() {
  return (
    <div className="search">
      <img src={search} />
      <span> 링크를 검색해 보세요.</span>
    </div>
  );
}

export default Search;
