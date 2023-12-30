import Modal from "./Modal";
import Portal from "./Modal/Portal";
import useHandleModal from "hooks/useHandleModal";
import { info } from "styles/pageInfo";
import { ReactComponent as LinkIcon } from "assets/icons/link.svg";

const FolderInfo = () => {
  const { onModal, currentType, onClose, toggleModal } = useHandleModal();
  return (
    <>
      <info.Wrapper>
        <info.FolderInputContainer>
          <LinkIcon />
          <info.FolderInput placeholder="링크를 추가해 보세요." />
          <info.FolderInputButton onClick={() => toggleModal("add")}>
            <span>추가하기</span>
          </info.FolderInputButton>
        </info.FolderInputContainer>
      </info.Wrapper>
      <Portal>{onModal && <Modal currentType={currentType} onClose={onClose} />}</Portal>
    </>
  );
};

export default FolderInfo;
