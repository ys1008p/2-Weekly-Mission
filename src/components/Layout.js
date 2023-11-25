import Gnb from './Gnb/Gnb';
import Footer from './Footer/Footer';
import FolderBanner from './FolderBanner/FolderBanner';
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
