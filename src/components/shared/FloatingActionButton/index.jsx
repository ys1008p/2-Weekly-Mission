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
            <button>폴더추가</button>
            <img className="FloatingActionButtonIcon" src={addIcon}></img>
          </button>
        </div>
      )}
    </>
  );
}
