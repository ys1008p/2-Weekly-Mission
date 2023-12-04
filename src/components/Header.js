import '../styles/Header.css'

function Header({ folderProfile }) {
  const { name, owner } = folderProfile;

  return (
    <header className="header">
      <div className="heading-content">
        <a href="/folder" className="avatar avatar-direction-column">
          <div className="avatar-image">
            <img src={owner.profileImageSource} alt="프로필 이미지" />
          </div>
          <span className="avatar-text">@{owner.name}</span>
        </a>
        <h2 className="title">{name}</h2>
      </div>
    </header>
  )
}

export default Header;