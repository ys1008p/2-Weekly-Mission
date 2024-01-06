import pen from "../../asset/pen.svg";
import deleteImg from "../../asset/delete.svg";
import share from "../../asset/share.svg";
const SharePenDeleteContent = ({ selectedFolder, handleModalOpen }) => {
  const handleButtonClick = (e) => {
    const value = e.currentTarget.getAttribute("data-value");
    handleModalOpen(true, value);
  };

  return (
    <div className="sharePenDeleteContent">
      <div>
        <p>{selectedFolder}</p>
      </div>
      {selectedFolder !== "전체" && (
        <div className="sharePenDeleteDiv">
          <button data-value="ShareModal" onClick={handleButtonClick}>
            <div>
              <img src={share} alt="shareImg" />
              <p>공유</p>
            </div>
          </button>
          <button data-value="EditModal" onClick={handleButtonClick}>
            <div>
              <img src={pen} alt="penImg" />
              <p>이름변경</p>
            </div>
          </button>
          <button data-value="DeleteFolderModal" onClick={handleButtonClick}>
            <div>
              <img src={deleteImg} alt="deleteImg" />
              <p>삭제</p>
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default SharePenDeleteContent;
