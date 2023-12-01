import styles from './FolderList.module.css';
import AddImg from '../../../assets/add.svg';
import AddWhiteImg from '../../../assets/addwhite.svg';

function FolderList({ data, selectedId, onClick }) {
  return (
    <div className={styles.FolderList}>
      <ul className={styles.list}>
        <li
          key={0}
          id="all"
          className={
            selectedId === 'all' ? `${styles.listItem} ${styles.active}` : `${styles.listItem}`
          }
          onClick={onClick}
        >
          전체
        </li>
        {data.map((item) => {
          return (
            <li
              key={item.id}
              id={item.id}
              className={
                String(item.id) === selectedId
                  ? `${styles.listItem} ${styles.active}`
                  : `${styles.listItem}`
              }
              onClick={onClick}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
      <div className={styles.addButton}>
        <img src={AddImg} alt="폴더 추가" className={styles.addIcon} />
        <img src={AddWhiteImg} alt="폴더 추가" className={styles.addWhiteIcon} />
      </div>
    </div>
  );
}

export default FolderList;
