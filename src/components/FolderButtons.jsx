import React, { useState } from 'react';
import useGetData from '../hooks/useGetData';
import ModalLayout from './ModalLayout';
import CTA from './CTA';
import { ReactComponent as AddIcon } from '../images/add.svg';
import styles from './FolderButtons.module.css';

export default function FolderButtons({ folderId, handleFolderClick }) {
  const [loading, error, user] = useGetData('users/1/folders');
  const [addFolderModalOpen, setAddFolderModalOpen] = useState(false);
  const [folderName, setFolderName] = useState('');

  if (loading) return <div>loading..</div>;
  if (error) return <p>{error}</p>;

  const folderList = user?.data;

  const list = folderList.map(({ id, name }) => (
    <li key={id}>
      <button
        className={`${styles.button} ${folderId === id ? styles.activeButton : ''}`}
        onClick={() => {
          handleFolderClick(id, name);
        }}
      >
        {name}
      </button>
    </li>
  ));

  const handleAddFolder = async (e) => {
    e.preventDefault();
    if (!folderName) return;
    const addFolder = async () => {
      await fetch(`https://bootcamp-api.codeit.kr/api/folders`, {
        method: 'POST',
        body: { name: folderName },
      });
    };
    await addFolder();
    setFolderName('');
    setAddFolderModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <ul className={styles.buttonList}>
        <li>
          <button
            className={`${styles.button} ${!folderId ? styles.activeButton : ''}`}
            onClick={() => {
              handleFolderClick(null, '전체');
            }}
          >
            전체
          </button>
        </li>
        {list}
      </ul>
      <button onClick={() => setAddFolderModalOpen(true)}>
        <AddIcon className={styles.addButton} src={AddIcon} alt='폴더 추가하기 버튼' fill='#6d6afe' />
      </button>
      {addFolderModalOpen && (
        <ModalLayout setModalOpen={setAddFolderModalOpen} modalTitle='폴더 추가'>
          <form className={styles.modalForm} onSubmit={handleAddFolder}>
            <input
              className={styles.modalInput}
              value={folderName}
              type='text'
              placeholder='내용 입력'
              onChange={(e) => setFolderName(e.target.value)}
            />
            <CTA text='추가하기' className='variableWidth' />
          </form>
        </ModalLayout>
      )}
    </div>
  );
}
