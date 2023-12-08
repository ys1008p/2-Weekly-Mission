import React from "react";
import ReactDOM from "react-dom/client";
import Shared from "./Shared";
import "./css/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Folder from "./Folder";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Shared />} />
      <Route path="/folder" element={<Folder />} />
    </Routes>
  </BrowserRouter>
);
