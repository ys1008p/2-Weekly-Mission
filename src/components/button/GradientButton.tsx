import styles from './GradientButton.module.css';

interface GradientButtonProps {
  text: string;
  small?: boolean;
}

const GradientButton = ({ text, small = false }: GradientButtonProps) => {
  return (
    <button
      type="button"
      className={`${styles.btn} ${small ? styles.small : ''}`}
    >
      {text}
    </button>
  );
};

export default GradientButton;
