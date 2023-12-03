import React from "react";
import NavBar from "../Components/Header/NavBar";
import Header from "../Components/Header/Header";
import Main from "../Components/Main/Main";
import Footer from "../Components/Footer/Footer";

export default function Root() {
  return (
    <>
      <NavBar />
      <Header />
      <Main />
      <Footer />
    </>
  );
}
