import { useEffect, useState } from 'react';
import "../styles/variables.css";
import GlobalStyle from '../styles/global';
import SharedPage from '../pages/SharedPage';

function App() {
  return (
    <div>
      <GlobalStyle />
      <SharedPage></SharedPage>
    </div>
  );
}

export default App;