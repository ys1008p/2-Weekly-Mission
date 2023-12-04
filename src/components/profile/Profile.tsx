import styles from './Profile.module.css';

interface ProfileProps {
  user: {
    email: string;
    image_source: string;
  };
}

const Profile = ({ user }: ProfileProps) => (
  <div className={styles.profile}>
    <img className={styles.icon} src={user.image_source} alt="profile" />
    <span className={styles.email}>{user.email}</span>
  </div>
);

export default Profile;
