import styles from './FolderList.module.css';
import AddImg from '../../../assets/add.svg';
import { useState } from 'react';

function FolderList({ data }) {
  const [activeKey, setActive] = useState('all');
  const handleClick = (e) => {
    setActive(e.target.id);
  };

  return (
    <div className={styles.FolderList}>
      <ul className={styles.list}>
        <li
          key={0}
          id="all"
          className={
            activeKey === 'all' ? `${styles.listItem} ${styles.active}` : `${styles.listItem}`
          }
          onClick={handleClick}
        >
          전체
        </li>
        {data.map((item) => {
          return (
            <li
              key={item.id}
              id={item.id}
              className={
                String(item.id) === activeKey
                  ? `${styles.listItem} ${styles.active}`
                  : `${styles.listItem}`
              }
              onClick={handleClick}
            >
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
