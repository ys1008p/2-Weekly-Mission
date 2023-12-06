import { BrowserRouter, Routes } from "react-router-dom";
import { routes } from "./routes";
function Main() {
  return (
    <BrowserRouter>
      <Routes>{routes}</Routes>
    </BrowserRouter>
  );
}

export default Main;
