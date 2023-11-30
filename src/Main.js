import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/Folder/App";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
