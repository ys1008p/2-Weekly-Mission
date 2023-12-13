function MainHeader({ ownerDatas, folderDatas }) {
  return (
    <>
      <div class="main-header">
        <div class="main-hearder_profile">
          <img
            className="main-header_profile_img"
            src={ownerDatas.profileImageSource}
            alt="profile_img"
          />
          <div className="main-header_profile_name">@{ownerDatas.name}</div>
        </div>
        <span className="main-header_folder-name">{folderDatas.name}</span>
      </div>
    </>
  );
}

export default MainHeader;
