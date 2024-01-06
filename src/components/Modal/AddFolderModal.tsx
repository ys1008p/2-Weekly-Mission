import { createPortal } from "react-dom";
import EditModal from "./EditModal";

const AddFolderModal = ({isOpen, onClick} : {isOpen:boolean, onClick:() => void}) => {
  return(
    isOpen ? createPortal(<EditModal title='폴더 추가' button='추가하기' onClick={onClick}/>, document.body) : null
  )
};

export default AddFolderModal;
