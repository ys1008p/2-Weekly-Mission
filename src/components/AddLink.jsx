import React, { useRef, useState } from 'react';
import CTA from './CTA';
import styles from './AddLink.module.css';
import ModalLayout from './ModalLayout';
import AddToFolderModal from './AddToFolderModal';

export default function AddLink() {
  const [url, setUrl] = useState('');
  const [addToFolderModalOpen, setAddToFolderModalOpen] = useState(false);

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        if (!url) return;
        setAddToFolderModalOpen(true);
      }}
    >
      <input
        className={styles.input}
        type='url'
        value={url}
        onChange={(e) => {
          setUrl(e.target.value);
        }}
        placeholder='🔗 링크를 추가해 보세요.'
      />
      <CTA text='추가하기' className='fixedWidth' />
      {addToFolderModalOpen && (
        <ModalLayout setModalOpen={setAddToFolderModalOpen} modalTitle='폴더에 추가' details={url}>
          <AddToFolderModal url={url} setUrl={setUrl} setAddToFolderModalOpen={setAddToFolderModalOpen} />
        </ModalLayout>
      )}
    </form>
  );
}
