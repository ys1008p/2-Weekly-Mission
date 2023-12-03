import "./UserPersonalFolder.css";

function UserPersonalFolder({ data }) {
  return <button className="personal-folder-button">{data.name}</button>;
}

export default UserPersonalFolder;
