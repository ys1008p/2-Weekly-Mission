import './FolderUser.css';

function FolderUser({ 
  folderName, 
  folderUserName, 
  folderUserProfile 
}){
  return (
    <div className="folder-info">
      <img className="user-profile" src={folderUserProfile} alt="폴더 사용자 프로필 이미지" />
      <p className="user-name">
        {folderUserName}
      </p>
      <p className="name">
        {folderName}
      </p>
    </div>
  );
}

export default FolderUser;