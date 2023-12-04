import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App.jsx";

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>{/* <Route path="" element={} /> */}</Routes>
      </App>
    </BrowserRouter>
  );
}

export { Main };
