import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../components/reset.css';
import '../components/root.css';

function App(){
  return(
    <div className="container">
      <Header className="header"/>
      <Main className="main"/>
      <Footer className="footer"/>
    </div>
  )
}

export default App;