import useToggle from '../../../hooks/useToggle';
import './FolderButton.css';

export default function FolderButton({ children }) {
  const [isFolderChosen, setIsFolderChosen] = useToggle();
  return (
    <button className={`FolderButton ${isFolderChosen && 'chosenFolderButton'}`} onClick={setIsFolderChosen}>
      {children}
    </button>
  );
}
