import styles from './GradientButton.module.css';

interface GradientButtonProps {
  text: string;
  className?: string;
}

const GradientButton = ({ text, className = '' }: GradientButtonProps) => {
  return (
    <button type="button" className={`${styles.btn} ${styles[className]}`}>
      {text}
    </button>
  );
};

export default GradientButton;
