import Gnb from './shared/Gnb/Gnb';
import Footer from './shared/Footer/Footer';
import FolderBanner from './FolderBanner/FolderBanner';
import Content from './Content/Content';

function Layout({ folder, profile }) {
  return (
    <>
      <Gnb profile={profile} />
      <FolderBanner folder={folder} />
      <Content folder={folder} />
      <Footer />
    </>
  );
}

export default Layout;
