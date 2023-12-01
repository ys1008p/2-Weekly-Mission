import "./Header.css";

function Header({ folder }) {
  const {
    name,
    owner: { name: ownerName, profileImageSource },
  } = folder;

  return (
    <header>
      <div className="folder-owner">
        <img className="owner-img" src={profileImageSource} alt={ownerName} />
        <span className="owner-name">@{ownerName}</span>
      </div>
      <h1 className="folder-name">{name}</h1>
    </header>
  );
}

export default Header;
