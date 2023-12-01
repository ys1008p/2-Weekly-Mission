import React from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";
import AuthProvider from "@/providers/AuthProvider";
import UserProvider from "@/providers/UserProvider";
import { RouterProvider, createBrowserRouter, defer } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import SharedPage from "@/pages/SharedPage";
import { getFolder } from "./apis/folder-api";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/shared",
    loader: () => {
      return defer({ folder: getFolder() });
    },
    element: <SharedPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>,
);
