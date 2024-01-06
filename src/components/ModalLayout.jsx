import React, { useEffect, useRef } from 'react';
import CloseButtonImg from '../images/close.svg';
import styles from './ModalLayout.module.css';

export default function ModalLayout({ setModalOpen, modalTitle, details, children }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleModalClose = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handleModalClose);

    return () => {
      document.removeEventListener('mousedown', handleModalClose);
    };
  }, []);

  return (
    <div className={styles.background}>
      <div className={styles.container} ref={modalRef}>
        <button
          className={styles.closeButton}
          onClick={(e) => {
            e.preventDefault();
            setModalOpen(false);
          }}
        >
          <img src={CloseButtonImg} alt='모달 닫기' />
        </button>
        <header className={styles.header}>
          <p className={styles.modalTitle}>{modalTitle}</p>
          <p className={styles.details}>{details}</p>
        </header>
        {children}
      </div>
    </div>
  );
}
