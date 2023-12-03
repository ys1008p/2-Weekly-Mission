import React from "react";
import "../../CSS/Folder.css";
import ShareIcon from "../../images/share.svg";
import PenIcon from "../../images/pen.svg";
import DeleteIcon from "../../images/Group 36.svg";
import PlusIcon from "../../images/add.svg";

export default function FolderButtons() {
  return (
    <>
      <div className="BtnContainer">
        <div className="BtnBox">
          <button className="FolderBtn">전체</button>
          <button className="FolderBtn">⭐️ 즐겨찾기</button>
          <button className="FolderBtn">코딩 팁</button>
          <button className="FolderBtn">채용 사이트</button>
          <button className="FolderBtn">유용한 글</button>
          <button className="FolderBtn">나만의 장소</button>
        </div>
        <button className="FolderPlusBtn">
          <img src={PlusIcon} alt="Plus" />
        </button>
      </div>
      <div className="FolderCardHeaderContainer">
        <h1 className="FolderBtnName">전체</h1>
        <div className="FolderLinksBtn">
          <button className="FolderLinks">
            <img src={ShareIcon} alt="Share" />
            공유
          </button>
          <button className="FolderLinks">
            <img src={PenIcon} alt="Pen" />
            이름 변경
          </button>
          <button className="FolderLinks">
            <img src={DeleteIcon} alt="Delete" />
            삭제
          </button>
        </div>
      </div>
    </>
  );
}
