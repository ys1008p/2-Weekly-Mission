import Gnb from './Gnb/Gnb';
import Footer from './Footer/Footer';
import { Cards } from './Cards/Cards';
import FolderBanner from './FolderBanner/FolderBanner';
import SearchBar from './SearchBar/SearchBar';
import Content from './Content/Content';
function Layout({ items, profile }) {
  return (
    <>
      <Gnb profile={profile}></Gnb>
      <FolderBanner items={items} />
      <Content items={items} />
      <Footer></Footer>
    </>
  );
}

export default Layout;
