import shareIcon from "../../assets/share.png";
import renameIcon from "../../assets/pen.png";
import deleteIcon from "../../assets/delete.png";
import useModal from "../../hooks/useModal";
import "./Option.css";

function OptionButton({ onClick, icon, altText, text }) {
  return (
    <>
      <button className="option-button" onClick={onClick}>
        <img src={icon} alt={altText} />
        <div className="text-style">{text}</div>
      </button>
    </>
  );
}

function Option({ folderName }) {
  const { Modal: ShareModal, openModal: openShareModal } = useModal();
  const { Modal: RenameModal, openModal: openRenameModal } = useModal();
  const { Modal: DeleteModal, openModal: openDeleteModal } = useModal();

  return (
    <div className="option">
      <OptionButton
        onClick={openShareModal}
        icon={shareIcon}
        altText="share icon"
        text="공유"
      />
      {ShareModal && <ShareModal title="폴더 공유" link={folderName} />}
      <OptionButton
        onClick={openRenameModal}
        icon={renameIcon}
        altText="rename icon"
        text="이름 변경"
      />
      {RenameModal && (
        <RenameModal
          title="폴더 이름 변경"
          input="폴더 이름"
          button="변경하기"
          color="blue"
        />
      )}
      <OptionButton
        onClick={openDeleteModal}
        icon={deleteIcon}
        altText="delete icon"
        text="삭제"
      />
      {DeleteModal && (
        <DeleteModal
          title="폴더 삭제"
          link={folderName}
          button="삭제하기"
          color="red"
        />
      )}
    </div>
  );
}

export default Option;
