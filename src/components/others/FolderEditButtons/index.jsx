import './FolderEditButtons.css';
import shareIcon from './share.svg';
import penIcon from './pen.svg';
import deleteIcon from './delete.svg';
import kakaoLogo from './Kakao.svg';
import facebookLogo from './Facebook.svg';
import linkIcon from './link.svg';
import useModal from '../../shared/Modal/useModal';
import Modal from '../../shared/Modal';
import clsx from 'clsx';

import styles from '../../shared/Modal/Modal.module.css';

import { useContext } from 'react';
import { SearchContext } from '../../../context/SearchContext';
export default function FolderEditButtons() {
  const { selectedFolder } = useContext(SearchContext);

  const [sharemodalRef, openShareModal, closeShareModal] = useModal();
  const [editmodalRef, openEditModal, closeEditModal] = useModal();
  const [deletemodalRef, openDeleteModal, closeDeleteModal] = useModal();

  return (
    <div className="FolderEditButtons">
      <div className="FolderEditButtons__option">
        <img src={shareIcon}></img>
        <button onClick={openShareModal} className="FolderEditButtons__des">
          공유
        </button>
      </div>
      <div className="FolderEditButtons__option">
        <img src={penIcon}></img>
        <button onClick={openEditModal} className="FolderEditButtons__des">
          이름변경
        </button>
      </div>
      <div className="FolderEditButtons__option">
        <img src={deleteIcon}></img>
        <button onClick={openDeleteModal} className="FolderEditButtons__des">
          삭제
        </button>
      </div>

      <Modal
        title="폴더 공유"
        subTitle={selectedFolder.name}
        ref={(node) => {
          if (node) {
            sharemodalRef.current = node;
          } else sharemodalRef.current = null;
        }}
        onCloseModal={closeShareModal}
        isButtonActivated={false}
      >
        <div className={styles.folderShareInSNS}>
          <button className={styles.folderShareItem}>
            <div className={clsx(styles.folderShareLogoBackground, styles.shareIconKakao)}>
              <img className={styles.folderShareLogo} src={kakaoLogo}></img>
            </div>
            <span>카카오톡</span>
          </button>
          <button className={styles.folderShareItem}>
            <div className={clsx(styles.folderShareLogoBackground, styles.shareIconFacebook)}>
              <img className={styles.folderShareLogo} src={facebookLogo}></img>
            </div>
            <span>페이스북</span>
          </button>
          <button className={styles.folderShareItem}>
            <div className={clsx(styles.folderShareLogoBackground, styles.shareIconLink)}>
              <img className={styles.folderShareLogo} src={linkIcon}></img>
            </div>
            <span>링크 복사</span>
          </button>
        </div>
      </Modal>

      <Modal
        title="폴더 이름 변경"
        ref={(node) => {
          if (node) {
            editmodalRef.current = node;
          } else editmodalRef.current = null;
        }}
        onCloseModal={closeEditModal}
      >
        <div>
          <input className={styles.modalInput}></input>
        </div>
      </Modal>

      <Modal
        title="폴더 삭제"
        subTitle={selectedFolder.name}
        ref={(node) => {
          if (node) {
            deletemodalRef.current = node;
          } else deletemodalRef.current = null;
        }}
        onCloseModal={closeDeleteModal}
      ></Modal>
    </div>
  );
}
