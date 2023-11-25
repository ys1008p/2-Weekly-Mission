import Header from './Header';
import Main from './Main';
import '../components/reset.css';
import '../components/root.css';

function App(){
  return(
    <div className="container">
      <Header className="header"/>
      <Main className="main"/>
    </div>
  )
}

export default App;