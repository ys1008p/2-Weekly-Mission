import App from "App";
import { FolderPage } from "page-layout/FolderPage";
import { HomePage } from "page-layout/HomePage";
import { SharedPage } from "page-layout/SharedPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="shared">
            <Route index element={<SharedPage />} />
          </Route>
          <Route path="folder">
            <Route index element={<FolderPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
