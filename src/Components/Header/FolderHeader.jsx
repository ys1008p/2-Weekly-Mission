import React from "react";
import link from "../../images/link.svg";
import "../../CSS/Folder.css";

export default function FolderHeader() {
  return (
    <form className="FolderHeaderContainer">
      <input
        type="text"
        className="FolderHeaderInput"
        placeholder="링크를 추가해 보세요"
      />
      <div className="FolderHeaderImg">
        <img src={link} alt="link" />
      </div>
      <button type="submit" className="FolderHeaderBtn">
        추가하기
      </button>
    </form>
  );
}
