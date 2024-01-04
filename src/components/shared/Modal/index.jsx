import { forwardRef } from 'react';
import styles from './Modal.module.css';
import clsx from 'clsx';
import closeIcon from './close.svg';
const WARNING_ACTION = { delete: '삭제' };

const Modal = forwardRef(
  ({ onCloseModal, onClickActionButton, isButtonActivated = true, title, subTitle, children, ...props }, ref) => {
    const handleModalClick = (e) => {
      e.stopPropagation();
      e.preventDefault();
      if (e.target.nodeName === 'DIALOG') onCloseModal();
    };

    // 모달이 '삭제'와 같은 되돌릴 수 없는 액션을 쿠셔닝 하는 목적일때, 버튼을 붉은색으로 바꿈
    const isWarnedButton = title.includes(WARNING_ACTION.delete);

    return (
      <dialog ref={ref} {...props} onClick={handleModalClick} className={styles.modal}>
        <div className={styles.modalContentWrapper}>
          <button
            onClick={(e) => {
              e.preventDefault();
              onCloseModal();
            }}
          >
            <img className={styles.modalCloseButton} src={closeIcon} alt="" />
          </button>
          <div className={styles.modalTitle}>{title}</div>
          <div className={styles.modalSubTitle}>{subTitle}</div>
          <div className={styles.modalContent}>{children}</div>
          {isButtonActivated && (
            <button
              className={clsx(styles.modalButton, isWarnedButton && styles.modalWarningButton)}
              onClick={() => {
                onClickActionButton();
              }}
            >
              {`${title.slice(-2)}하기`}
            </button>
          )}
        </div>
      </dialog>
    );
  }
);

export default Modal;
