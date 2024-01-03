import AddLink from "../Components/AddLink";
import Buttons from "../Components/Buttons";
import Card from "../Components/Card";
import ListEdit from "../Components/ListEdit";
import SearchBar from "../Components/SearchBar";
import Footer from "../Components/Footer/Footer";
import { useState } from "react";
import Nav from "../Components/Header/Nav";

function Folder() {
  const [selectedButtonId, setSelectedButtonId] = useState(null);
  const [selectedButtonTitle, setSelectedButtonTitle] = useState("");
  return (
    <>
      <Nav sticky="off" />
      <AddLink />
      <SearchBar />
      <Buttons
        setSelectedButtonId={setSelectedButtonId}
        selectedButtonId={selectedButtonId}
        setSelectedButtonTitle={setSelectedButtonTitle}
      />
      <ListEdit title={selectedButtonTitle} />
      <Card selectedButtonId={selectedButtonId} />
      <Footer />
    </>
  );
}

export default Folder;
