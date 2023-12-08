import { useState, useCallback, useEffect } from "react";
import kebab from "../../assets/kebab.png";
import "./Kebab.css";

function Kebab() {
  const [isOpen, setIsOpen] = useState(false);

  const handleButton = useCallback((e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = () => setIsOpen(false);
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      className="kebab-img"
      onClick={(e) => {
        e.preventDefault();
        handleButton(e);
      }}
    >
      <img src={kebab} alt="kebab icon" />
      {isOpen && (
        <ul
          className="popup"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <li className="delete" key="delete">
            삭제하기
          </li>
          <li className="add-in-folder" key="add">
            폴더에 추가
          </li>
        </ul>
      )}
    </div>
  );
}

export default Kebab;
