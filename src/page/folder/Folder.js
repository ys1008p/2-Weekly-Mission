import Footer from "../../components/Footer";
import "../folder/Header.css";
import "../../components/reset.css";
import "../../components/root.css";
import Profile from '../../components/Profile';
import Data from '../../components/Data';
import SearchInput from '../../components/SearchInput';

function Folder() {
  return (
    <div className="container">
      <Profile/>
      <SearchInput />
      <Data />
      <Footer className="footer"/>
    </div>
  );
}

export default Folder;
