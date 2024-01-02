import { useEffect, useRef } from 'react';
import styles from './Modal.module.css';

function Modal({ children, id, onRemove }) {
  const ref = useRef();

  const handleClickClose = () => {
    onRemove(id);
  };

  const handleClickOutside = (e) => {
    const target = e.target;
    const rect = target.getBoundingClientRect();
    if (
      rect.left > e.clientX ||
      rect.right < e.clientX ||
      rect.top > e.clientY ||
      rect.bottom < e.clientY
    ) {
      onRemove(id);
    }
  };

  const handleKeydownEsc = (e) => {
    if (e.keyCode === 27) {
      onRemove(id);
    }
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.showModal();
      document.addEventListener('keydown', handleKeydownEsc);
      // document.addEventListener('click', handleClickOutside);
      document.body.style = `overflow: hidden`;
    }

    return () => {
      document.removeEventListener('keydown', handleKeydownEsc);
      // document.removeEventListener('click', handleClickOutside);
      document.body.style = `overflow: auto`;
      if (ref.current) {
        ref.current.close();
      }
    };
  }, [id]);

  return (
    <dialog ref={ref} className={styles.modal}>
      <button onClick={handleClickClose} className={styles.closeButton} />
      {children}
    </dialog>
  );
}

export default Modal;
