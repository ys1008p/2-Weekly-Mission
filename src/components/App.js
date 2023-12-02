import { useEffect, useState } from 'react';
import "../styles/variables.css";
import Cta from './atoms/Cta';
import Logo from './atoms/Logo';
import Gnb from './molecules/Gnb'
import GlobalStyle from '../styles/global';
import UserBadge from './atoms/UserBadge';
import SharedHeader from './molecules/SharedHeader';
import SearchBar from './atoms/SearchBar';
import Card from './atoms/Card'
function App() {
  return (
    <div>
      <GlobalStyle />
      <div>
        <Cta>로그인</Cta>
        <Logo></Logo>
        <UserBadge></UserBadge>
        <Gnb></Gnb>
        <SharedHeader></SharedHeader>
        <SearchBar></SearchBar>
        <Card></Card>
      </div>
    </div>
  );
}

export default App;