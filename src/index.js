import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './Component/Header/NavBar';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Main from './Component/Main/Main';
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


