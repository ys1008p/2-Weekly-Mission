import "./FolderNavClick.css";

export const FolderNavClick = ({ id, name, onFolderClick }) => {
  const folderNavClick = () => {
    if (onFolderClick) {
      onFolderClick(id);
    }
  };

  return (
    <button onClick={folderNavClick} className="folder-nav-list">
      {name}
    </button>
  );
};
