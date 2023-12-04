import './FolderEditButtons.css';
import shareIcon from './share.svg';
import penIcon from './pen.svg';
import deleteIcon from './delete.svg';

export default function FolderEditButtons() {
  return (
    <div className="FolderEditButtons">
      <div className="FolderEditButtons__option">
        <img src={shareIcon}></img>
        <div className="FolderEditButtons__des">공유</div>
      </div>
      <div className="FolderEditButtons__option">
        <img src={penIcon}></img>
        <div className="FolderEditButtons__des">이름변경</div>
      </div>
      <div className="FolderEditButtons__option">
        <img src={deleteIcon}></img>
        <div className="FolderEditButtons__des">삭제</div>
      </div>
    </div>
  );
}
