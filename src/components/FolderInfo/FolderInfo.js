import './FolderInfo.css';

export default function FolderInfo({ owner, folderName }) {
  const { profileImageSource, name } = owner;
  return (
    <div className="FolderInfo">
      <div className="FolderInfo-owner-info">
        <img src={profileImageSource} alt="폴더 소유자 프로필 이미지" />
        <div className="FolderInfo-owner-name">{name}</div>
      </div>
      <div className="FolderInfo-folder-name">{folderName}</div>
    </div>
  );
}
