import "./Header.css";

function Header({ folder }) {
  const renderHeader = () => {
    if (Object.keys(folder).length === 0) return null;

    const {
      name,
      owner: { name: ownerName, profileImageSource },
    } = folder;

    return (
      <div>
        <div className="folder-owner">
          <img className="owner-img" src={profileImageSource} alt={ownerName} />
          <span className="owner-name">@{ownerName}</span>
        </div>
        <h1 className="folder-name">{name}</h1>
      </div>
    );
  };

  return <header>{renderHeader()}</header>;
}

export default Header;
