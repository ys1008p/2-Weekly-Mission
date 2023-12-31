import React from 'react';

import styles from './ModalContainer.module.css';
import CloseBtn from '@/assets/images/icon/close.svg';

interface ContainerProps {
  children: React.ReactNode;
  setIsModalOpen: (isModalOpen: boolean) => void;
}

const ModalContainer = ({ children, setIsModalOpen }: ContainerProps) => {
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <button onClick={handleModalClose}>
          <img src={CloseBtn} className={styles.close} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default ModalContainer;
