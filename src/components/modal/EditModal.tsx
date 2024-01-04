import GradientButton from '@/components/button/GradientButton';

import styles from './ModalContents.module.css';

interface EditModalProps {
  value?: string;
}

const EditModal = ({ value }: EditModalProps) => {
  return (
    <div>
      <div className={styles.title}>
        {value ? '폴더 이름 변경' : '폴더 추가'}
      </div>

      <input
        type="text"
        className={styles.input}
        value={value}
        placeholder="내용 입력"
      />

      <div className={styles['edit-btn']}>
        <GradientButton text={value ? '변경하기' : '추가하기'} />
      </div>
    </div>
  );
};

export default EditModal;
