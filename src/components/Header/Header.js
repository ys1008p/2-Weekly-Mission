import "./Header.css";

function Header({
  userFolderProfileImgSrc = "/",
  folderOwnerName = "",
  userFolderName = "",
}) {
  return (
    <div className="header-section">
      <div className="user">
        <div className="user-profile">
          <img src={userFolderProfileImgSrc} alt="폴더 소유자 프로필 이미지" />
          <span>@{folderOwnerName}</span>
        </div>
        <div className="folder-name">{userFolderName}</div>
      </div>
    </div>
  );
}

export default Header;
