import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App.jsx";
import SharedPage from "./pages/SharedPage.jsx";
import FolderPage from "./pages/FolderPage.jsx";
import Temp from "./pages/TempPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Temp />} />
          <Route path="folder" element={<FolderPage />} />
          <Route path="shared" element={<SharedPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
