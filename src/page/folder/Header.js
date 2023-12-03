import './Header.css';
import AddLinkBar from '../../components/addLinkBar/AddLinkBar';
import Nav from './nav/Nav';

function Header({
  className,
  profileImg,
  profileEmail
}){
  return (
    <header className={className}>  
      <Nav 
        profileImg={profileImg}
        profileEmail={profileEmail}
      />
      <AddLinkBar />
    </header>
  );
}

export default Header;
