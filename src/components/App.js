import { useEffect, useState } from 'react';
import "../styles/variables.css";
import Cta from './atoms/Cta';
import Logo from './atoms/Logo';

function App() {
  return (
    <div>
      <Cta>로그인</Cta>
      <Logo></Logo>
    </div>
  );
}

export default App;