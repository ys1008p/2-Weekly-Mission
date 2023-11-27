import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthProvider } from "contexts/AuthContext";
import { CacheProvider } from "contexts/CacheContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CacheProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </CacheProvider>
  </React.StrictMode>
);
