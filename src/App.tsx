import Footer from "components/Footer";
import { Outlet } from "react-router-dom";
import Layout from "components/Layout";

function App() {
  return (
    <Layout>
      <Outlet />
      <Footer />
    </Layout>
  );
}

export default App;
