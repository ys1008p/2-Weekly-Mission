import styles from './Banner.module.css';

interface BannerProps {
  owner: { name: string; profileImageSource: string };
  folder: string;
}

const Banner = ({ owner, folder }: BannerProps) => (
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

export default Banner;
