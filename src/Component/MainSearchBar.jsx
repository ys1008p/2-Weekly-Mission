import React from "react";
import IconSearchBar from "../images/Search.svg";
export default function MainSearchBar() {
  return (
    <div className="MainSearchBarContainer">
      <input
        type="text"
        className="MainSearchBar"
        placeholder="링크를 검색해 보세요."
      />
      <button className="SearchBtn">
        <img src={IconSearchBar} alt="검색아이콘" className="IconSearch" />
      </button>
    </div>
  );
}
