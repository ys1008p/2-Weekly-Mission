import AddLink from "./Components/AddLink";
import Buttons from "./Components/Buttons";
import Card from "./Components/Card";
import ListTitle from "./Components/ListTitle";
import SearchBar from "./Components/SearchBar";
import Footer from "./Footer";
import Nav from "./Nav";
import { useState } from "react";

function Folder() {
  const [selectedButtonId, setSelectedButtonId] = useState(null);
  const [selectedButtonTitle, setSelectedButtonTitle] = useState("");
  return (
    <>
      <Nav />
      <AddLink />
      <SearchBar />
      <Buttons
        setSelectedButtonId={setSelectedButtonId}
        selectedButtonId={selectedButtonId}
        setSelectedButtonTitle={setSelectedButtonTitle}
      />
      <ListTitle title={selectedButtonTitle} />
      <Card selectedButtonId={selectedButtonId} />
      <Footer />
    </>
  );
}

export default Folder;
