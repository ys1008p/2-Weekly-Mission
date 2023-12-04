import GradientButton from '@/components/button/GradientButton';
import styles from './AddLinkBar.module.css';

import LinkIcon from '@/assets/images/icon/link.svg';

interface AddLinkBarProps {
  placeholder: string;
}

const AddLinkBar = ({ placeholder }: AddLinkBarProps) => (
  <div className={styles['input-bar']}>
    <img className={styles.icon} src={LinkIcon} alt="link" />
    <input className={styles.input} type="text" placeholder={placeholder} />
    <div className={styles['btn-add']}>
      <GradientButton text="추가하기" className="add" />
    </div>
  </div>
);

export default AddLinkBar;
