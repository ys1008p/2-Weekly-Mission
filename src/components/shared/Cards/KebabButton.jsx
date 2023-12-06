import './KebabButton.css';
import kebapImg from './images/kebab.png';
import useToggle from '../../../hooks/useToggle';
import Selector from '../Selector/Selector';

export default function KebabButtons() {
  const [isOpened, setIsOpened] = useToggle(false);
  const handlePreventDefault = (e) => {
    e.preventDefault();
    setIsOpened();
  };
  return (
    <>
      <div>
        <button className="kebabButton" onClick={handlePreventDefault}>
          <img className="moreInfoCebap" src={kebapImg}></img>
          {isOpened && <Selector />}
        </button>
      </div>
    </>
  );
}
