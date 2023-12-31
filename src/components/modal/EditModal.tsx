import GradientButton from '@/components/button/GradientButton';

import styles from './ModalContents.module.css';

interface EditModalProps {
  value?: string;
}

const EditModal = ({ value }: EditModalProps) => {
  return (
    <div>
      <div className={styles.title}>폴더 이름 변경</div>

      <input
        type="text"
        className={styles.input}
        value={value}
        placeholder="내용 입력"
      />

      <div className={styles['edit-btn']}>
        <GradientButton text="변경하기" />
      </div>
    </div>
  );
};

export default EditModal;
