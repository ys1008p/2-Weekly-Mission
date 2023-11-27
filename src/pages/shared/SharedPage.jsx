import './style.css';

import { useEffect, useState } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

import { getFolders } from './api';
import SharedTitle from './SharedTitle';

function SharedPage() {
  const [folders, setFolders] = useState({});

  useEffect(() => {
    const response = getFolders();
    setFolders(response);
  }, []);

  return (
    <>
      <Header>
        <SharedTitle></SharedTitle>
      </Header>
      <main></main>
      <Footer></Footer>
    </>
  );
}

export default SharedPage;
