import '../styles/FolderLists.css';
import addIcon from '../assets/add.svg';
import whiteAddIcon from '../assets/whiteAdd.svg';

const Folder = ({id, name , onClick, activeFolder}) => {
  return(
    <button className={`folder--btn ${activeFolder === id ? 'folder-active--btn' : 'folder-inactive--btn'}`} onClick={() => onClick(id)}>
      {name}
    </button>
  )
};

const FolderLists = ({ folders, activeFolder, onClick}) => {

  if(!folders) return;

  return(
    <div className="folder-list--container">
      <div className="folder-btn--container">
        {folders?.map((folder) => <Folder key={folder?.id} name={folder?.name} id={folder?.id} onClick={onClick} activeFolder={activeFolder}></Folder>)}
      </div>
      <button className="add--icon"><img src={addIcon} alt="+" /></button>
      <button className="mobile-add--btn"><p>폴더 추가</p><img src={whiteAddIcon} alt="+" className="mobile-add--icon"/></button>
    </div>
  )
};

export default FolderLists;
