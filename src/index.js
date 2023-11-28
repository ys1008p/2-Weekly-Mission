import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Nav from "./commons/nav/Nav";
import Container from "./components/container/container";
import UserInfo from "./components/userInfo/userInfo";
import Fooder from "./commons/footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Nav />
    <UserInfo />
    <Container />
    <Fooder />
  </>
);
