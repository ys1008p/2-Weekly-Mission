import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
      margin: 0;
      font-family: "Pretendard";
  }
  html,
  body {
      font-size: 62.5%;
      margin: 0;
  }
  
  a {
      color: inherit;
      text-decoration: none;
  }
`;

export default GlobalStyle;