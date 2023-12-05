import './Header.css';
import AddLinkBar from '../../components/AddLinkBar';
import Nav from '../../components/Nav';

function Header({
  className,
  profileImg,
  profileEmail,
  a
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
