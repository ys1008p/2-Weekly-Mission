import React from "react";
import kakao from "../../../asset/kakao.svg";
import facebook from "../../../asset/facebook.svg";
import link from "../../../asset/link.svg";

const ShareModal = ({ folderId }) => {
  const handleCopyClipBoard = () => {
    try {
      const clipboardURL = `http://localhost:3000/shared?user=1&folder=${folderId}`;
      navigator.clipboard.writeText(clipboardURL);

      alert(`클립보드에 복사되었습니다. ${folderId}`);
      console.log(clipboardURL);
    } catch (error) {
      alert("클립보드 복사에 실패하였습니다.");
    }
  };

  return (
    <div>
      <div className="modalTitle">
        <div>폴더 공유</div>
        <div className="modalSubTitle">폴더명</div>
      </div>
      <div className="modalLogoButtons">
        <button className="logoButton">
          <div className="logoBox kakao">
            <img src={kakao} alt="kakaoTalk" />
          </div>
          <div>카카오톡</div>
        </button>
        <button className="logoButton">
          <div className="logoBox faceBook">
            <img src={facebook} alt="faceBook" />
          </div>
          <div>페이스북</div>
        </button>
        <button className="logoButton" onClick={handleCopyClipBoard}>
          <div className="logoBox link">
            <img src={link} alt="linkCopy" />
          </div>
          <div>링크 복사</div>
        </button>
      </div>
    </div>
  );
};

export default ShareModal;
