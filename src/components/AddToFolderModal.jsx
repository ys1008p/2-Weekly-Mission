import React, { useState } from 'react';
import useGetData from '../hooks/useGetData';
import CTA from './CTA';
import CheckImg from '../images/check.svg';
import styles from './AddToFolderModal.module.css';

export default function AddToFolderModal({ url, setUrl, setAddToFolderModalOpen }) {
  const [selectedFolderId, setSelectedFolderId] = useState('');
  const [loading, error, user] = useGetData('users/1/folders');

  if (loading) return <div>loading..</div>;
  if (error) return <p>{error}</p>;

  const folderList = user?.data;

  const list = folderList.map(({ id, name, link: { count } }) => (
    <li key={id} className={`${styles.folderContainer} ${selectedFolderId === id ? styles.selected : ''}`}>
      <button
        className={styles.folder}
        onClick={(e) => {
          e.preventDefault();
          setSelectedFolderId(id);
        }}
      >
        {name}
        <span className={styles.linkCount}>{count}개 링크</span>
      </button>
      {id === selectedFolderId && <img src={CheckImg} alt='선택한 폴더를 나타내틑 체크 모양 아이콘' />}
    </li>
  ));

  const handleAddToFolder = async (e) => {
    e.preventDefault();
    await fetch(`https://bootcamp-api.codeit.kr/api/links`, {
      method: 'POST',
      body: { url: url, folderId: selectedFolderId },
    });
    setAddToFolderModalOpen(false);
    setUrl && setUrl('');
  };

  return (
    <div className={styles.container}>
      <ul className={styles.folderList}>{list}</ul>
      <CTA text='추가하기' className='variableWidth' handleButtonClick={handleAddToFolder} />
    </div>
  );
}
