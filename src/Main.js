import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shared from "./pages/shared";
import Folder from "./pages/folder";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="shared" element={<Shared />}></Route>
        <Route path="folder" element={<Folder />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
