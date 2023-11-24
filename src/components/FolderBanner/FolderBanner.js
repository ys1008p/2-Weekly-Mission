import './FolderBanner.css';

export default function FolderBanner({ items }) {
  const { name } = items;
  const { owner } = items;
  return (
    <div className="folderBanner">
      <div className="avatar">
        <img className="bannerImage" src={owner.profileImageSource}></img>
        <div className="bannerOwner">{owner.name}</div>
      </div>
      <div className="bannerFolderName">{name}</div>
    </div>
  );
}
