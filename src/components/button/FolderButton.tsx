import styles from './FolderButton.module.css';

interface FolderButtonProps {
  name: string;
  selected?: boolean;
}

const FolderButton = ({ name, selected = false }: FolderButtonProps) => {
  return (
    <button
      type="button"
      className={`${styles.btn} ${selected ? styles.selected : ''}`}
    >
      {name}
    </button>
  );
};

export default FolderButton;
