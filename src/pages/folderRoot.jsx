import React from "react";
import Footer from "../Components/Footer/Footer";
import FolderNavBar from "../Components/Header/FolderNavBar";
import FolderHeader from "../Components/Header/FolderHeader";
import FolderMain from "../Components/Main/FolderMain";

export default function FolderRoot() {
  return (
    <>
      <FolderNavBar />
      <FolderHeader />
      <FolderMain />
      <Footer />
    </>
  );
}
