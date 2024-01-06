import { createPortal } from "react-dom";
import DeleteModal from "./DeleteModal";

const DeleteLinkModal = ({isOpen, onClick} : {isOpen:boolean, onClick:() => void}) => {
  return(
    isOpen ? createPortal(<DeleteModal title='링크 삭제' description={'test'} button='삭제하기' onClick={onClick}/>, document.body) : null
  )
};

export default DeleteLinkModal;
