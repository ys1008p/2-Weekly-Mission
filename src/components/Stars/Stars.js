import './Stars.css';
import useToggle from '../../hooks/useToggle';
import starIcon from './star.svg';
import fullStarIcon from './star-full.svg';

export default function Stars() {
  const [isFullStar, setIsFullStar] = useToggle();
  const handlePreventDefault = (e) => {
    e.preventDefault();
  };
  return (
    <button className="starToggle" onClick={handlePreventDefault}>
      <img src={isFullStar ? fullStarIcon : starIcon} onClick={setIsFullStar}></img>
    </button>
  );
}
