import Footer from './Footer';
import Header from './Header';

function Layout({ children }) {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
