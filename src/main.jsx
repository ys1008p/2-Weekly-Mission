import React from "react";
import ReactDOM from "react-dom/client";
import SharedPage from "@/pages/SharedPage";
import "./globals.css";
import AuthProvider from "@/providers/AuthProvider";
import UserProvider from "@/providers/UserProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <SharedPage />
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>,
);
