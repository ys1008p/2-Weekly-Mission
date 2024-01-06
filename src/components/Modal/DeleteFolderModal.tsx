import { createPortal } from "react-dom";
import DeleteModal from "./DeleteModal";

const DeleteFolderModal = ({isOpen, onClick} : {isOpen:boolean, onClick:() => void}) => {
  return(
    isOpen ? createPortal(<DeleteModal title='폴더 삭제' description={'test'} button='삭제하기' onClick={onClick}/>, document.body) : null
  )
};

export default DeleteFolderModal;
