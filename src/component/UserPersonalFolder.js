import { Link } from "react-router-dom";
import "./UserPersonalFolder.css";

function UserPersonalFolder({ data }) {
  return (
    <Link to={`/folder/${data.id}`}>
      <button className="personal-folder-button">{data.name}</button>
    </Link>
  );
}

export default UserPersonalFolder;
