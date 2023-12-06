import './FloatingActionButton.css';
import addIcon from './add.png';
import { useMediaQuery } from 'react-responsive';

export default function FloatingActionButton() {
  const isMobile = useMediaQuery({
    query: '(max-width :767px)',
  });
  return (
    <>
      {isMobile && (
        <div className="FloatingActionButtonContainer">
          <button className="FloatingActionButton">
            <div>폴더추가</div>
            <img className="FloatingActionButtonIcon" src={addIcon}></img>
          </button>
        </div>
      )}
    </>
  );
}
