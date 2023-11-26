import "./Header.css";
import HeaderFoloderSection from "./HeaderFolderSection";
import Navbar from "./Navbar";

function Header({ userData }) {
  return (
    <header className="header-container">
      <Navbar userData={userData} />
      <HeaderFoloderSection />
    </header>
  );
}

export default Header;
