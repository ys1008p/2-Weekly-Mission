import styles from './FolderButton.module.css';

interface FolderType {
  id: number | null;
  name: string;
}

interface FolderButtonProps extends FolderType {
  selected: boolean;
  onSelected: ({ id, name }: FolderType) => void;
}

const FolderButton = ({
  id,
  name,
  selected,
  onSelected,
}: FolderButtonProps) => {
  const handleClick = () => {
    onSelected({ id, name });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${styles.btn} ${selected ? styles.selected : ''}`}
    >
      {name}
    </button>
  );
};

export default FolderButton;
