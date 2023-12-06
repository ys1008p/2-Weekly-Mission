import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-black-000: #000;
    --color-black-333: #333;
    --color-black: #373740;
    --color-light-black : #333236;
    --color-very-light-gray: #f5f5f5;
    --color-gray: #666;
    --color-light-gray: #cfcfcf;
    --color-dark-gray: #676767;
    --color-middle-gray: #9fa6b2;
    --color-blue: #6d6afe;
    --color-sky-blue: #edf7ff;
    --color-white: #fff;
    --bg-black: #111322;
    --bg-sky-blue: #f0f6ff;
  }

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

  .main {
    margin: 4rem 0 10rem 0;
    padding: 0 19rem;

    @media screen and (max-width:1124px) {
      padding: 0 3.2rem;
    }
  }

`;

export default GlobalStyle;
