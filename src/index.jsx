import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "contexts/AuthContext";
import { CacheProvider } from "contexts/CacheContext";
import { RouterProvider } from "react-router-dom";
import { router } from "router";
import GlobalStyles from "assets/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <CacheProvider>
      <AuthProvider>
        <GlobalStyles />
        <RouterProvider router={router} />
      </AuthProvider>
    </CacheProvider>
  </ThemeProvider>
  // </React.StrictMode>
);
