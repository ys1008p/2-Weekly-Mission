import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "router";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "contexts/AuthContext";
import { CacheProvider } from "contexts/CacheContext";
import GlobalStyles from "styles/GlobalStyles";
import { theme } from "styles/theme";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CacheProvider>
        <AuthProvider>
          <GlobalStyles />
          <RouterProvider router={router} />
        </AuthProvider>
      </CacheProvider>
    </ThemeProvider>
  </React.StrictMode>
);
