import "./css/App.css";
import "./css/reset.css";
import "./css/var.css";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import React from "react";

function App() {
  return (
    <>
      <NavBar />
      <Main />
      <Footer />
    </>
  );
}

export default App;
