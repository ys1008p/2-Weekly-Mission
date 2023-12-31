import styles from './DeleteButton.module.css';

interface DeleteButtonProps {
  text: string;
}

const DeleteButton = ({ text }: DeleteButtonProps) => {
  return (
    <button type="button" className={`${styles.btn}`}>
      {text}
    </button>
  );
};

export default DeleteButton;
