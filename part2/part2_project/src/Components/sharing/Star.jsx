import starImg from '../../img/star.svg';
import selected from '../../img/selected.svg';

export default function Star({ isSelected, onClick, id }) {
  return (
    <img
      onClick={onClick}
      className="star"
      src={isSelected === id ? selected : starImg}
      alt="즐겨찾기 버튼"
    ></img>
  );
}
