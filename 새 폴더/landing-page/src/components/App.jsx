import Nav from "./nav";
import Footer from "./footer";
import Header from "./header";
import Body from "./body";
import React, { useState } from "react";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Body />
      <Footer></Footer>
    </div>
  );
}
export default App;
