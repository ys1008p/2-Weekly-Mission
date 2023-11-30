import React from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import './App.css';

export default function Folder() {
  return (
    <>
      {/*todo: profile data를 어떻게 가져오지 ?  */}
      <Navbar profileUrl='users/1' className='navbar' />
      <SearchBar />
    </>
  );
}
