import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Component/Navbar';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Main from './Component/Main';
import './CSS/Landing.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
    <Navbar/>
    <Header/>
    <Main/>
    <Footer/>
    </>
);


