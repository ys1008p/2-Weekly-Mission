import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./component/App";
import FolderPage from "./pages/FolderPage";
import SharedPage from "./pages/SharedPage";
import InfoLoader from "./component/InfoLoader";

function Main() {
  const { folderInfo, userFolderList, sharedFolderInfo } = InfoLoader();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>

          <Route
            path="/shared"
            element={<SharedPage sharedFolderInfo={sharedFolderInfo} />}
          ></Route>
          <Route
            path="/folder"
            element={
              <FolderPage
                folderInfo={folderInfo}
                userFolderList={userFolderList}
              />
            }
          ></Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
