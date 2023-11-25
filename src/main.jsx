import React from "react";
import ReactDOM from "react-dom/client";
import App from "/src/shared/Page";
import AuthProvider from "/src/_provider/AuthProvider";
import UserProvider from "/src/_provider/UserProvider";
import "./globals.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>,
);
