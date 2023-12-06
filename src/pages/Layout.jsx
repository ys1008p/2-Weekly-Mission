import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
