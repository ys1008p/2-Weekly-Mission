import styles from './SharedBanner.module.css';

interface SharedBannerProps {
  owner: { name: string; profileImageSource: string };
  folder: string;
}

const SharedBanner = ({ owner, folder }: SharedBannerProps) => (
  <section className={styles.banner}>
    <div className={styles.wrapper}>
      <img
        className={styles.icon}
        src={owner.profileImageSource}
        alt="avatar"
      />
      <span>{owner.name}</span>
      <h1 className={styles.folder}>{folder}</h1>
    </div>
  </section>
);

export default SharedBanner;
