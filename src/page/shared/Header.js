import FolderUser from '../../components/FolderUser/FolderUser'
import Nav from './nav/Nav';

function SharedHeader({ 
  className, 
  profileEmail, 
  profileImg, 
  folderName, 
  folderUserName, 
  folderUserProfile 
}){
  return (
    <header className={className}>
      <Nav 
        profileEmail={profileEmail} 
        profileImg={profileImg}
      />
      <FolderUser 
        folderName={folderName}
        folderUserName={folderUserName}
        folderUserProfile={folderUserProfile}
      />
    </header>
  );
}

export default SharedHeader;