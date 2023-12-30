import React from "react";
import { BrowserRouter } from "react-router-dom";
import CreateDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const root = CreateDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
