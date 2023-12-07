import CardList from "./components/CardList";
import Search from "./components/Search";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/App.css";
import "./styles/Global.css";
import Sort from "./components/Sort"





function App() {
  
  return (
    <div>
      <Header />
      <Search />
      <Sort/>
       <CardList/>
      <Footer />
    </div>
  );
}

export default App;
