import React, { Fragment, useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CardList from './components/CardList';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [folder, setFolder] = useState({
    id: '',
    name: '',
    owner: '',
    links: [],
  });

  const getData = async () => {
    try {
      setLoading(true);
      setError(undefined);
      const response = await fetch(
        'https://bootcamp-api.codeit.kr/api/sample/folder'
      );
      const data = await response.json();
      const { folder } = data;
      setFolder(folder);
    } catch (error) {
      setError('network 통신 실패');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) return;
  if (error) return;

  return (
    <Fragment>
      <Navbar />
      <Header folderName={folder.name} owner={folder.owner} />
      <SearchBar />
      <CardList links={folder.links} />
      <Footer />
    </Fragment>
  );
}
