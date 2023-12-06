function Header({ userFolderType }) {
  const { owner, name } = userFolderType;

  return (
    <header>
      <div className="hero-header">
        <div className="proFileGap">
          <img
            src={owner.profileImageSource}
            alt="프로필이미지"
            className="profile"
          />
          <p className="folderUserName">{owner.name}</p>
        </div>
        <div className="folderName">{name}</div>
      </div>
    </header>
  );
}

export default Header;
