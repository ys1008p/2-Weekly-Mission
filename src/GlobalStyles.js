import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
${reset};

*,
*::before,
*::after {
    box-sizing: border-box;
    text-decoration: none;
}

html{
    font-size: 62.5%;
    
}

body {
    font-family: "Pretendard Variable", Arial, sans-serif;
}

`;

export default GlobalStyle;
