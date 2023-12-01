import shareIcon from "../../assets/share.png";
import renameIcon from "../../assets/pen.png";
import deleteIcon from "../../assets/delete.png";
import "./Option.css";
function Option() {
  return (
    <div className="option">
      <button className="option-button">
        <img src={shareIcon} alt="share icon" />
        <div className="text-style">공유</div>
      </button>
      <button className="option-button">
        <img src={renameIcon} alt="rename icon" />
        <div className="text-style">이름 변경</div>
      </button>
      <button className="option-button">
        <img src={deleteIcon} alt="delete icon" />
        <div className="text-style">삭제</div>
      </button>
    </div>
  );
}

export default Option;
