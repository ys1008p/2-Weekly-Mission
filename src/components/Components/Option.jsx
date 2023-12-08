import shareIcon from "../../assets/share.png";
import renameIcon from "../../assets/pen.png";
import deleteIcon from "../../assets/delete.png";
import useModal from "../../hooks/useModal";
import "./Option.css";

function OptionButton({ icon, altText, text }) {
  const { openModal } = useModal();
  return (
    <button className="option-button" onClick={openModal}>
      <img src={icon} alt={altText} />
      <div className="text-style">{text}</div>
    </button>
  );
}

function Option() {
  return (
    <div className="option">
      <OptionButton icon={shareIcon} altText="share icon" text="공유" />
      <OptionButton icon={renameIcon} altText="rename icon" text="이름 변경" />
      <OptionButton icon={deleteIcon} altText="delete icon" text="삭제" />
    </div>
  );
}

export default Option;
