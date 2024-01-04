import DeleteButton from '@/components/button/DeleteButton';
import styles from './ModalContents.module.css';

interface DeleteModalProps {
  type: 'folder' | 'link';
  target: string;
}

const DeleteModal = ({ type, target }: DeleteModalProps) => {
  return (
    <div>
      <div className={styles.title}>
        {type === 'folder' ? '폴더 삭제' : '링크 삭제'}
      </div>
      <div className={styles.target}>{target}</div>
      <div className={styles['delete-btn']}>
        <DeleteButton text="삭제하기" />
      </div>
    </div>
  );
};

export default DeleteModal;
