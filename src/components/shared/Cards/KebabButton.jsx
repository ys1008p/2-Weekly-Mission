import './KebabButton.css';
import kebapImg from './images/kebab.png';
import checkedIcon from './checked.svg';
import Selector from '../Selector/Selector';
import { useContext, useRef, useState } from 'react';
import useOutsideClick from '../../../hooks/useClickOutside';
import useModal from '../Modal/useModal';
import styles from '../Modal/Modal.module.css';
import Modal from '../Modal';
import { SearchContext } from '../../../context/SearchContext';
import clsx from 'clsx';
export default function KebabButtons({ link }) {
  const [linkDeletemModalRef, openLinkDeleteModal, closeLinkDeleteModal] = useModal();
  const [linkAddToFolderModalRef, openLinkAddToFolderModal, closeLinkAddToFolderModal] = useModal();
  const { folderList } = useContext(SearchContext);

  const [isOpened, setIsOpened] = useState(false);
  const [selectedFolderId, setSelectedFolderId] = useState(undefined);
  const selectorRef = useRef();
  const handlePreventDefault = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpened((prev) => !prev);
  };

  useOutsideClick(selectorRef, () => {
    setIsOpened(false);
  });

  return (
    <div ref={selectorRef}>
      <button className="kebabButton" onClick={handlePreventDefault}>
        <img className="moreInfoCebap" src={kebapImg}></img>
      </button>
      {isOpened && (
        <Selector openLinkDeleteModal={openLinkDeleteModal} openLinkAddToFolderModal={openLinkAddToFolderModal} />
      )}

      <Modal
        title="링크 삭제"
        subTitle={link.url}
        ref={(node) => {
          if (node) {
            linkDeletemModalRef.current = node;
          } else linkDeletemModalRef.current = null;
        }}
        onCloseModal={closeLinkDeleteModal}
      ></Modal>

      <Modal
        title="폴더에 추가"
        subTitle={link.url}
        ref={(node) => {
          if (node) {
            linkAddToFolderModalRef.current = node;
          } else linkAddToFolderModalRef.current = null;
        }}
        onCloseModal={closeLinkAddToFolderModal}
      >
        <div className={styles.folderList}>
          {folderList.map((folderInfo) => {
            return (
              <button
                className={clsx(styles.folderItemInfo, selectedFolderId === folderInfo.id && styles.selectedFolder)}
                onClick={() => {
                  setSelectedFolderId(folderInfo.id);
                }}
              >
                <div className={styles.folderItemInfoWrapper}>
                  <div className={styles.folderItemName}>{folderInfo.name}</div>
                  <div className={styles.folderItemLinkCount}>{folderInfo.link.count}개 링크</div>
                </div>
                {selectedFolderId === folderInfo.id && <img src={checkedIcon}></img>}
              </button>
            );
          })}
        </div>
      </Modal>
    </div>
  );
}
