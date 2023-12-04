import AddLinkBar from '@/components/input/AddLinkBar';
import styles from './FolderBanner.module.css';

const FolderBanner = () => (
  <section className={styles.banner}>
    <div className={styles.wrapper}>
      <AddLinkBar placeholder="링크를 추가해 보세요" />
    </div>
  </section>
);

export default FolderBanner;
