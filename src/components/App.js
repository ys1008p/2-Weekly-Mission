
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../components/reset.css';
import '../components/root.css';
import { useEffect, useState } from 'react';
import { getFolder } from '../api';

function App(){
  const [cardList, setCardList] = useState([]);

  const handleLoadFolder = async () => {
    const { folder } = await getFolder();
    const { links } = folder;
    setCardList(links);
  }

  useEffect(() => {
    handleLoadFolder();
  }, [])

  return(
    <div className="container">
      <Header className="header"/>
      <Main className="main" links={cardList}/>
      <Footer className="footer"/>
    </div>
  )
}

export default App;