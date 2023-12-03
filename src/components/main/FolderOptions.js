import share from "../../assets/option/share.svg";
import pen from "../../assets/option/pen.svg";
import trashCan from "../../assets/option/trash-can.svg";
import Option from "./Option";

export function FolderOptions() {
  const optionDatas = [
    { id: 1, name: "공유", img: share },
    { id: 2, name: "이름 변경", img: pen },
    { id: 3, name: "삭제", img: trashCan },
  ];

  return (
    <div className="option-container">
      {optionDatas.map((option, i) => {
        return (
          <div key={`option-${i}`}>
            <Option optionData={option} />
          </div>
        );
      })}
    </div>
  );
}

export default FolderOptions;
