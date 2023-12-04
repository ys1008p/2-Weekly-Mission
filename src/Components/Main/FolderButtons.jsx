import React, { useEffect, useState } from "react";
import { FolderButtonApi } from "../../api";
import ShareIcon from "../../images/share.svg";
import PenIcon from "../../images/pen.svg";
import DeleteIcon from "../../images/Group 36.svg";
import PlusIcon from "../../images/add.svg";

export default function FolderButtons() {
  const [folderData, setFolderData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await FolderButtonApi();
      setFolderData(data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="BtnContainer">
        <div className="BtnBox">
          <button className="FolderBtn">전체</button>
          {folderData ? (
            folderData?.map((data) => (
              <div key={data}>
                <button className="FolderBtn">{data.name}</button>
              </div>
            ))
          ) : (
            <button className="FolderBtn">error</button>
          )}
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
