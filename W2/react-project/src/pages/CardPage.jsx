import CardList from "../components/CardList";
import Search from "../components/Search";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/App.css";
import "../styles/Global.css";
import Sort from "../components/Sort"

function CardPage(){

  return (<div>
      <Header />
      <Search />
      <Sort/>
      <Footer />
  </div>)
}

export default CardPage