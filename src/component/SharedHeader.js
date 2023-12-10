import "../css/headershared.css";
function SharedHeader({ sharedFolderInfo }) {
  return (
    <header>
      <div className="userInfo">
        <div>
          <div className="profileImgDiv">
            <img
              className="profileImg"
              src={sharedFolderInfo?.owner?.profileImageSource}
              alt="유저이미지"
            />
          </div>
          <p className="profileName">@{sharedFolderInfo?.owner?.name}</p>
        </div>
        <div>
          <p className="userFavorites">{sharedFolderInfo?.name}</p>
        </div>
      </div>
    </header>
  );
}
export default SharedHeader;
