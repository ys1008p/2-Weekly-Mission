import Gnb from './Gnb/Gnb';
import Footer from './Footer/Footer';
import { Cards } from './Cards/Cards';
import FolderBanner from './FolderBanner/FolderBanner';
function Layout({ items, profile }) {
  return (
    <>
      <Gnb profile={profile}></Gnb>
      <FolderBanner items={items} />
      <Cards items={items}></Cards>
      <Footer></Footer>
    </>
  );
}

export default Layout;
