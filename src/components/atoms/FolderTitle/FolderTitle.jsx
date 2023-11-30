import styles from './FolderTitle.module.css';
import ShareImg from '../../../assets/share.svg';
import PenImg from '../../../assets/pen.svg';
import TrashImg from '../../../assets/trash.svg';
function FolderTitle() {
  return (
    <div className={styles.FolderTitle}>
      <div className={styles.title}>유용한 글</div>
      <div className={styles.options}>
        <div className={styles.option}>
          <img src={ShareImg} alt="공유" />
          <span>공유</span>
        </div>
        <div className={styles.option}>
          <img src={PenImg} alt="이름 변경" />
          <span>이름 변경</span>
        </div>
        <div className={styles.option}>
          <img src={TrashImg} alt="삭제" />
          <span>삭제</span>
        </div>
      </div>
    </div>
  );
}

export default FolderTitle;
