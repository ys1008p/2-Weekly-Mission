import { useState, useCallback, useEffect } from "react";
import kebab from "../../assets/kebab.png";
import "./Kebab.css";
import { Link } from "react-router-dom";

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
    <div className="kebab-img" onClick={handleButton}>
      <img src={kebab} alt="kebab icon" />
      {isOpen && (
        <ul
          className="popup"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <li className="delete" key="delete">
            <Link to="/">삭제하기</Link>
          </li>
          <li className="add-in-folder" key="add">
            <Link to="/">폴더에 추가</Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Kebab;
