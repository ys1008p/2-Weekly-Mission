import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main";
import { ThemeProvider } from "styled-components";
import FolderAddButton from "./components/Components/FolderAddButton";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={FolderAddButton}>
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  </ThemeProvider>
);
