import { useEffect, useState } from 'react';
import "../styles/variables.css";

import GlobalStyle from '../styles/global';

import SharedPageTemplate from './template/Shared';
function App() {
  return (
    <div>
      <GlobalStyle />
      <div>
        <SharedPageTemplate></SharedPageTemplate>
      </div>
    </div>
  );
}

export default App;