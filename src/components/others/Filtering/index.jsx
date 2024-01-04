import './Filtering.css';
import FolderButton from '../../shared/FolderButton';
import addFolderIcon from './add.png';
import { useMediaQuery } from 'react-responsive';
import useModal from '../../shared/Modal/useModal';
import styles from '../../shared/Modal/Modal.module.css';
import Modal from '../../shared/Modal';

export default function Sorting({ chosenFolderId, folder }) {
  const [addFoldermodalRef, openAddFolderModal, closeAddFoldereModal] = useModal();

  const isNotMobile = useMediaQuery({
    query: '(min-width :768px)',
  });

  const allInfo = {
    id: undefined,
    name: '전체',
  };
  const needAllLink = chosenFolderId === allInfo.id;

  return (
    <div className="folderNav">
      <div className="Sorting">
        <FolderButton isFolderChosen={needAllLink} chosenFolderId={chosenFolderId} folderInfo={allInfo} />
        {folder.map((folderInfo) => {
          const isFolderChosen = +chosenFolderId === folderInfo.id; // 선택된 폴더인지 확인
          return <FolderButton isFolderChosen={isFolderChosen} key={folderInfo.id} folderInfo={folderInfo} />;
        })}
      </div>
      {isNotMobile && (
        <div className="addFolderButton">
          <button onClick={openAddFolderModal} className="folderAddText">
            폴더 추가
          </button>
          <img className="addFolderIcon" src={addFolderIcon}></img>
        </div>
      )}

      <Modal
        title="폴더 추가"
        ref={(node) => {
          if (node) {
            addFoldermodalRef.current = node;
          } else addFoldermodalRef.current = null;
        }}
        onCloseModal={closeAddFoldereModal}
      >
        <div>
          <input placeholder="내용 입력" className={styles.modalInput}></input>
        </div>
      </Modal>
    </div>
  );
}
