import FolderInfo from "components/FolderInfo";
import Footer from "components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import Layout from "components/Layout";

function App() {
  const { pathname } = useLocation();

  return (
    <Layout>
      <FolderInfo path={pathname} />
      <Outlet />
      <Footer />
    </Layout>
  );
}

export default App;
