import styles from './AddLinkBar.module.css';

import LinkIcon from '@/assets/images/icon/link.svg';

interface AddLinkBarProps {
  placeholder: string;
}

const AddLinkBar = ({ placeholder }: AddLinkBarProps) => (
  <div className={styles['input-bar']}>
    <img className={styles.icon} src={LinkIcon} alt="link" />
    <input className={styles.input} type="text" placeholder={placeholder} />
    <button className={styles['btn-add']}>추가하기</button>
  </div>
);

export default AddLinkBar;
