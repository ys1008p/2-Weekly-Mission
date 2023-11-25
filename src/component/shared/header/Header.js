import "./Header.css";
import HeaderFoloderSection from "./HeaderFolderSection";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="header-container">
      <Navbar />
      <HeaderFoloderSection />
    </header>
  );
}

export default Header;
