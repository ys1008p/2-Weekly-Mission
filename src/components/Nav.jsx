import React from "react";
import logoImg from "../assets/logo.svg";
import Profile from "./Profile";
import "../css/Nav.css";

function Nav({ profileData }) {
  return (
    <nav className="App-nav">
      <div className="App-nav-container">
        <a href="../week5/index.html">
          <img className="logo" src={logoImg} />
        </a>
        <div className="profile">
          <Profile profileData={profileData} />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
