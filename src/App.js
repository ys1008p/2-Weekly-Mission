import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import './App.css';
import SharedMain from './components/SharedMain/SharedMain';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SharedMain />
      <Footer />
    </div>
  );
}

export default App;
