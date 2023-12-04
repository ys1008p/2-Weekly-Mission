import React, { useEffect, useState } from "react";
import { FolderButtonApi } from "../../api";
import ShareIcon from "../../images/share.svg";
import PenIcon from "../../images/pen.svg";
import DeleteIcon from "../../images/Group 36.svg";
import PlusIcon from "../../images/add.svg";

export default function FolderButtons({ onSelectValue }) {
  const [folderData, setFolderData] = useState([]);
  const [value, setValue] = useState("전체");

  const handleClickButton = (e, id) => {
    const { name } = e.target;
    setValue(name);
    onSelectValue(name, id);
  };
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
          <button onClick={handleClickButton} name="전체" className="FolderBtn">
            전체
          </button>
          {folderData ? (
            folderData?.map((data) => (
              <div key={data.id}>
                <button
                  key={data.id}
                  onClick={(e) => handleClickButton(e, data.id)}
                  name={data.name}
                  className="FolderBtn"
                >
                  {data.name}
                </button>
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
        <h1 className="FolderBtnName">{value}</h1>
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
