import styles from './GrayIconButton.module.css';

interface GrayIconButtonProps {
  icon: string;
  text: string;
}

const GrayIconButton = ({ icon, text }: GrayIconButtonProps) => {
  return (
    <button className={styles.btn} type="button">
      <img className={styles.icon} src={icon} alt="icon" />
      <span className={styles.text}>{text}</span>
    </button>
  );
};

export default GrayIconButton;
