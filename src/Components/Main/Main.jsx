import React from "react";
import MainSearchBar from "./MainSearchBar";
import MainCardContainer from "./MainCardContainer";
import "../../CSS/Landing.css";

export default function Main() {
  return (
    <div className="Main">
      <MainSearchBar />
      <MainCardContainer />
    </div>
  );
}
