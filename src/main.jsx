import React from "react";
import ReactDOM from "react-dom/client";
import App from "/shared/Page";
import "./globals.css";
import AuthProvider from "../shared/AuthProvider";
import UserProvider from "../shared/UserProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>,
);
