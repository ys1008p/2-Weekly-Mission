import { useRef } from "react";
import "../../css/modal.css";
import EditModal from "./innerModalFrame.js/EditModal";
import close from "../../asset/close.svg";
import AddFolderModal from "./innerModalFrame.js/AddFolderModal";
import ShareModal from "./innerModalFrame.js/ShareModal";
import DeleteFolderModal from "./innerModalFrame.js/DeleteFolderModal";
import DeleteLinkModal from "./innerModalFrame.js/DeleteLinkModal";
import AddModal from "./innerModalFrame.js/AddModal";

const ContainerModal = ({
  handleModalOpen,
  selectedModalOption,
  folderId,
  inputLinkValue,
  setInputLinkValue,
}) => {
  const modalBackground = useRef();

  const handleCloseModal = () => {
    handleModalOpen(false, "");
  };

  const renderActiveModal = () => {
    switch (selectedModalOption) {
      case "EditModal":
        return <EditModal />;
      case "AddFolderModal":
        return (
          <AddFolderModal
            inputLinkValue={inputLinkValue}
            setInputLinkValue={setInputLinkValue}
          />
        );
      case "ShareModal":
        return <ShareModal folderId={folderId} />;
      case "DeleteFolderModal":
        return <DeleteFolderModal />;
      case "DeleteLinkModal":
        return <DeleteLinkModal />;
      case "AddModal":
        return <AddModal />;
      default:
        return <EditModal />;
    }
  };

  return (
    <div
      className="modalBackground"
      ref={modalBackground}
      onClick={(e) => {
        if (e.target === modalBackground.current) {
          handleCloseModal();
        }
      }}
    >
      <div className="modalContainer">
        {renderActiveModal(selectedModalOption)}
        <button
          onClick={() => {
            handleCloseModal();
          }}
        >
          <img className="closeButton" src={close} alt="closeButton" />
        </button>
      </div>
    </div>
  );
};

export default ContainerModal;
