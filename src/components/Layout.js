import Gnb from './Gnb/Gnb';
import Footer from './Footer/Footer';
import { Cards } from './Cards/Cards';
function Layout({ items, profile }) {
  return (
    <>
      <Gnb profile={profile}></Gnb>
      <Cards items={items}></Cards>
      <Footer></Footer>
    </>
  );
}

export default Layout;
