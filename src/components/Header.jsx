import { useContext } from "react";
import { FolderDataContext } from "../util/FolderDataContext";
import "../styles/Header.css";

const Header = () => {
  const { folder } = useContext(FolderDataContext);

  return (
    <div className="header">
      <img src={folder?.owner.profileImageSource} alt="profileImage" />
      <p>{folder?.owner.name}</p>
      <p>{folder?.name}</p>
    </div>
  );
};

export { Header };
