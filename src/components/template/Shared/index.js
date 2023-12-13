import React from "react"
import Footer from "../../molecules/Footer";
import SharedPageHeader from "./Header";
import SharedPageMain from "./Main";
import { useContext } from "react";
const SharedPageTemplate = () => {

  return (
    <>
      <SharedPageHeader></SharedPageHeader>
      <SharedPageMain></SharedPageMain>
      <Footer></Footer>
    </>
  )
}

export default SharedPageTemplate;