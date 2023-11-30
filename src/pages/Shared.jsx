import React from 'react';
import useGetData from '../hooks/useGetData';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CardList from '../components/CardList';
import Footer from '../components/Footer';
import './App.css';

export default function Shared() {
  const [loading, error, data] = useGetData('sample/folder');

  if (loading) return <div>loading..</div>;
  if (error) return <p>{error}</p>;

  const folder = data?.folder;

  return (
    <>
      <Navbar profileUrl='sample/user' className='navbar-fixed' />
      <Header folderName={folder.name} owner={folder.owner} />
      <SearchBar />
      <CardList links={folder.links} />
      <Footer />
    </>
  );
}
