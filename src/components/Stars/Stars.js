import './Stars.css';
import useToggle from '../../Hooks/useToggle';
import starIcon from './star.svg';
import fullStarIcon from './star-full.svg';

export default function Stars() {
  const [isFullStar, setIsFullStar] = useToggle();
  return (
    <button className="starToggle">
      <img src={isFullStar ? fullStarIcon : starIcon} onClick={setIsFullStar}></img>
    </button>
  );
}
