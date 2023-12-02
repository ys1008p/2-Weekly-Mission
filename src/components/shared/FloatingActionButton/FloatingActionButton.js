import './FloatingActionButton.css';
import addIcon from './add.png';
export default function FloatingActionButton() {
  return (
    <div class="FloatingActionButtonContainer">
      <button className="FloatingActionButton">
        <div>폴더추가</div>
        <img className="FloatingActionButtonIcon" src={addIcon}></img>
      </button>
    </div>
  );
}
