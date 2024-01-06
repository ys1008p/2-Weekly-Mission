import React, { useRef } from "react";
import linkImg from "../../asset/link.svg";
import "../../css/headerfolder.css";

function FolderHeader({ handleModalOpen }) {
  const inputRef = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputLinkValue = inputRef.current.value;
    const value = "AddFolderModal";
    handleModalOpen(true, value, inputLinkValue);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <div className="linkInput">
          <div className="linkInputDiv">
            <img src={linkImg} className="folderHeaderImg" alt="linkImg" />
            <input
              ref={inputRef}
              className="folderInput"
              placeholder="링크를 추가해 보세요"
            />
          </div>
          <button type="submit" className="folderButton">
            추가하기
          </button>
        </div>
      </form>
    </header>
  );
}

export default FolderHeader;
