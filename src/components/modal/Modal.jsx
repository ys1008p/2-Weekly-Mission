import { useEffect, useRef, useState } from 'react';
import styles from './Modal.module.css';

function Modal({ children, id, onRemove }) {
  const [isOpen, setIsOpen] = useState(true);
  const ref = useRef();

  const handleClickClose = () => {
    setIsOpen(false);
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
      setIsOpen(false);
      onRemove(id);
    }
  };

  const handleKeydownEsc = (e) => {
    if (e.keyCode === 27) {
      setIsOpen(false);
      onRemove(id);
    }
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.showModal();
      document.addEventListener('keydown', handleKeydownEsc);
      // document.addEventListener('click', handleClickOutside);
    }

    return () => {
      if (ref.current) {
        ref.current.close();
        document.removeEventListener('keydown', handleKeydownEsc);
        // document.removeEventListener('click', handleClickOutside);
      }
    };
  }, [isOpen]);

  return (
    <dialog ref={ref} className={styles.modal}>
      <button onClick={handleClickClose} className={styles.closeButton} />
      {children}
    </dialog>
  );
}

export default Modal;
