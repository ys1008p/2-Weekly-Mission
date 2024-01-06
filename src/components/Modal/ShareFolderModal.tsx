import { createPortal } from "react-dom";
import ShareModal from "./ShareModal";

const ShareFolderModal = ({isOpen, onClick} : {isOpen:boolean, onClick:() => void}) => {
  return(
    isOpen ? createPortal(<ShareModal description="test" onClick={onClick}/>, document.body) : null
  )
};

export default ShareFolderModal;
