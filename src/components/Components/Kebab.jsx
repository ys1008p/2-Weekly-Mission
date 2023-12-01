import { useState, useCallback, useEffect } from "react";
import kebab from "../../assets/kebab.png";
import "./Kebab.css";

function Kebab() {
  const [isOpen, setIsOpen] = useState(false);

  const handleButton = useCallback((e) => {
    e.stopPropagation();
    setIsOpen((nextIsOpen) => !nextIsOpen);
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
    <div className="kebab-img" onMouseEnter={handleButton}>
      <img src={kebab} alt="kebab icon" />
      {isOpen && (
        <ul className="popup">
          <li className="delete">삭제하기</li>
          <li className="add-in-folder">폴더에 추가</li>
        </ul>
      )}
    </div>
  );
}

export default Kebab;
