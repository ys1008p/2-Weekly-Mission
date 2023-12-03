import './Header.css';
import AddLinkBar from '../../components/addLinkBar/AddLinkBar';
import Nav from './nav/Nav';

function Header({
  profileImg,
  profileEmail
}){
  return (
    <header className="header">  
      <Nav 
        profileImg={profileImg}
        profileEmail={profileEmail}
      />
      <AddLinkBar />
    </header>
  );
}

export default Header;
