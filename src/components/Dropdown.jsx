import React, { useEffect, useRef, useState } from 'react';
import ModalLayout from './ModalLayout';
import CTA from './CTA';
import styles from './Dropdown.module.css';
import AddToFolderModal from './AddToFolderModal';

export default function Dropdown({ className, setViewDropBox, url, id }) {
  const [deleteLinkModalOpen, setDeleteLinkModalOpen] = useState(false);
  const [addToFolderModalOpen, setAddToFolderModalOpen] = useState(false);
  const dropBoxRef = useRef(null);

  useEffect(() => {
    const handleDropBoxClose = (e) => {
      if (dropBoxRef.current && !dropBoxRef.current.contains(e.target)) {
        setViewDropBox(false);
      }
    };

    document.addEventListener('mousedown', handleDropBoxClose);

    return () => {
      document.removeEventListener('mousedown', handleDropBoxClose);
    };
  }, []);

  const handleDeleteLink = async (e) => {
    e.preventDefault();
    await fetch(`https://bootcamp-api.codeit.kr/api/links/${id}`, {
      method: 'DELETE',
    });
    setDeleteLinkModalOpen(false);
  };

  return (
    <div className={`${className} ${styles.dropdown}`} ref={dropBoxRef}>
      <button
        className={styles.dropdownMenu}
        onClick={(e) => {
          e.preventDefault();
          setDeleteLinkModalOpen(true);
        }}
      >
        삭제하기
      </button>
      {deleteLinkModalOpen && (
        <ModalLayout setModalOpen={setDeleteLinkModalOpen} modalTitle='링크 삭제' details={url}>
          <CTA text='삭제하기' className='variableWidth delete' handleButtonClick={handleDeleteLink} />
        </ModalLayout>
      )}
      <button
        className={styles.dropdownMenu}
        onClick={(e) => {
          e.preventDefault();
          setAddToFolderModalOpen(true);
        }}
      >
        폴더에 추가
      </button>
      {addToFolderModalOpen && (
        <ModalLayout setModalOpen={setAddToFolderModalOpen} modalTitle='폴더에 추가' details={url}>
          <AddToFolderModal url={url} setAddToFolderModalOpen={setAddToFolderModalOpen} />
        </ModalLayout>
      )}
    </div>
  );
}
