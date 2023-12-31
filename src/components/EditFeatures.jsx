import React, { useState } from 'react';
import ModalLayout from './ModalLayout';
import CTA from './CTA';
import ShareImg from '../images/share.svg';
import PenImg from '../images/pen.svg';
import DeleteImg from '../images/trash.svg';
import styles from './EditFeatures.module.css';

export default function EditFeatures({ folderId, folderName }) {
  const [editFolderNameModalOpen, setEditFolderNameModalOpen] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');

  const [deleteFolderModalOpen, setDeleteFolderModalOpen] = useState(false);

  const handleEditFolderName = async (e) => {
    e.preventDefault();
    if (!newFolderName) return;
    const editFolderName = async () => {
      await fetch(`https://bootcamp-api.codeit.kr/api/folders/${folderId}`, {
        method: 'PUT',
        body: { name: newFolderName },
      });
    };
    await editFolderName();
    setNewFolderName('');
    setEditFolderNameModalOpen(false);
  };

  const handleDeleteFolder = async () => {
    await fetch(`https://bootcamp-api.codeit.kr/api/folders/${folderId}`, {
      method: 'DELETE',
    });
    setDeleteFolderModalOpen(false);
  };

  return (
    <div className={styles.features}>
      <button className={styles.feature}>
        <img src={ShareImg} alt='폴더 공유' />
        공유
      </button>
      <button className={styles.feature} onClick={() => setEditFolderNameModalOpen(true)}>
        <img src={PenImg} alt='폴더 이름 변경' />
        이름 변경
      </button>
      {editFolderNameModalOpen && (
        <ModalLayout className={styles.modalForm} setModalOpen={setEditFolderNameModalOpen} modalTitle='폴더 이름 변경'>
          <form className={styles.modalForm} onSubmit={handleEditFolderName}>
            <input
              className={styles.modalInput}
              value={newFolderName}
              type='text'
              placeholder='내용 입력'
              onChange={(e) => setNewFolderName(e.target.value)}
            />
            <CTA text='변경하기' className='variableWidth' />
          </form>
        </ModalLayout>
      )}
      <button className={styles.feature} onClick={() => setDeleteFolderModalOpen(true)}>
        <img src={DeleteImg} alt='폴더 삭제' />
        삭제
      </button>
      {deleteFolderModalOpen && (
        <ModalLayout setModalOpen={setDeleteFolderModalOpen} modalTitle='폴더 삭제' details={folderName}>
          <CTA text='삭제하기' className='variableWidth delete' handleButtonClick={handleDeleteFolder} />
        </ModalLayout>
      )}
    </div>
  );
}
