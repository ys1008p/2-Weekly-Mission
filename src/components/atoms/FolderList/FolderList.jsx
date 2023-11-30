import styles from './FolderList.module.css';
import AddImg from '../../../assets/add.svg';
function FolderList({ data }) {
  return (
    <div className={styles.FolderList}>
      <ul className={styles.list}>
        <li key={0} className={`${styles.listItem} ${styles.active}`}>
          전체
        </li>
        {data.map((item) => {
          return (
            <li key={item.id} className={`${styles.listItem}`}>
              {item.name}
            </li>
          );
        })}
      </ul>
      <img src={AddImg} alt="폴더 추가" className={styles.addButton} />
    </div>
  );
}

export default FolderList;
