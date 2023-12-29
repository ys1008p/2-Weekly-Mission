import './KebabButton.css';
import kebapImg from './images/kebab.png';
import Selector from '../Selector/Selector';
import { useRef, useState } from 'react';
import useOutsideClick from '../../../hooks/useClickOutside';
export default function KebabButtons() {
  const [isOpened, setIsOpened] = useState(false);
  const selectorRef = useRef();
  const handlePreventDefault = (e) => {
    e.preventDefault();
    setIsOpened((prev) => !prev);
  };

  useOutsideClick(selectorRef, () => {
    setIsOpened(false);
  });

  return (
    <>
      <div>
        <button className="kebabButton" onClick={handlePreventDefault}>
          <div ref={selectorRef}>
            <img className="moreInfoCebap" src={kebapImg}></img>
            {isOpened && <Selector />}
          </div>
        </button>
      </div>
    </>
  );
}
