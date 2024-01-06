import { createPortal } from "react-dom";
import EditModal from "./EditModal";

const EditFolderNameModal = ({isOpen, onClick} : {isOpen:boolean, onClick:() => void}) => {
  return(
    isOpen ? createPortal(<EditModal title='폴더 이름 변경' button='변경하기' onClick={onClick}/>, document.body) : null
  )
};

export default EditFolderNameModal;
