import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 62.5%;
    font-family: 'pretendard';
  }

  a {
    text-decoration: none;
  }

  .header {
    padding: 0 20rem;
    background-color: var(--color-sky-blue);

    @media screen and (max-width: 1124px) {
      padding: 6rem 3.2rem 9rem 3.2rem;
    }
  }

  .main {
    margin: 4rem 0 10rem 0;
    padding: 0 19rem;

    @media screen and (max-width:1124px) {
      .main {
        padding: 0 3.2rem;
      }
    }
  }

`;

export default GlobalStyle;
