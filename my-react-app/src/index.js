import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './Component/NavBar';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Main from './Component/Main';
import './CSS/Landing.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <NavBar/>
    <Header/>
    <Main/>
    <Footer/>
    </StrictMode>

);


