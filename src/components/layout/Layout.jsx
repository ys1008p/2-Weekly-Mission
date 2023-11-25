import PropTypes from 'prop-types';
import { Header } from './Header';
import Container from './Container';
import { Footer } from './Footer';

const Layout = ({ content }) => {
  return (
    <div>
      <Header />
      <Container>{content}</Container>
      <Footer />
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  content: PropTypes.node.isRequired,
};
