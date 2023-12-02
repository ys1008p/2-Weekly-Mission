// import logo from "./logo.svg";
import { useState } from "react";
import "./styles/App.css";
import "./styles/Global.css";
import Search from "./components/Search";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Bookmark from "./components/Bookmark";


function App() {
  // const [profile, setProfile] = useState(null);

  // async function sendHeader() {
  //   const { email, profileImageSource } = await GetUser();

  //   setProfile((prevValue) => ({
  //     ...prevValue,
  //     email,
  //     profileImageSource,
  //   }));

  //   return profile
  // }

  return (
    <div>
      <Header />
      <Bookmark />
      <Search />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
