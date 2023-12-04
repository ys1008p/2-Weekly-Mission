import { useState } from 'react';
import styles from './FolderButton.module.css';

interface FolderButtonProps {
  name: string;
}

const FolderButton = ({ name }: FolderButtonProps) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected((prev) => !prev);
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
