import Gnb from './Gnb/Gnb';
import Footer from './Footer/Footer';
import FolderBanner from './FolderBanner/FolderBanner';
import Content from './Content/Content';

function Layout({ folder, profile }) {
  return (
    <>
      <Gnb profile={profile}></Gnb>
      <FolderBanner folder={folder} />
      <Content folder={folder} />
      <Footer></Footer>
    </>
  );
}

export default Layout;
