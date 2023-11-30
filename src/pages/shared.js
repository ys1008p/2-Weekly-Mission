import "../style/index.css";
import "../style/shared.css";

import Footer from "../component/footer";
import Header from "../component/header";
import Folder from "../main/folder";

function Shared() {
  return (
    <div>
      <Header />
      <Folder />
      <Footer />
    </div>
  );
}

export default Shared;
