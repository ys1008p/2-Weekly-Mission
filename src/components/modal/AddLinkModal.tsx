import GradientButton from '@/components/button/GradientButton';
import styles from './ModalContents.module.css';

interface FolderData {
  folderName: string;
  linkCount: number;
  id: number;
}

interface AddLinkModalProps {
  linkUrl: string;
  folderList: FolderData[];
}

const AddLinkModal = ({ linkUrl, folderList }: AddLinkModalProps) => {
  return (
    <div>
      <div className={styles.title}>폴더에 추가</div>
      <div className={styles.target}>{linkUrl}</div>
      <ul className={styles.folders}>
        {folderList.map((folder) => (
          <li key={folder.id}>
            <div>
              <span>{folder.folderName}</span>
              <span className={styles.count}>{folder.linkCount}개 링크</span>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles['edit-btn']}>
        <GradientButton text="추가하기" />
      </div>
    </div>
  );
};

export default AddLinkModal;
