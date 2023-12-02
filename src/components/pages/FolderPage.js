import { Main } from "../main/Main.js";
import { Footer } from "../footer/Footer.js";
import AddLink from "../header/AddLink.js";
import FolderHeader from "../header/FolderHeader.js";
function FolderPage() {
  return (
    <>
      <FolderHeader />
      <AddLink />
      <Main />
      <Footer />
    </>
  );
}

export default FolderPage;
