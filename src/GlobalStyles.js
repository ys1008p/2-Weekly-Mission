import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
${reset};
html{
    font-size: 62.5%;
    box-sizing: border-box;
}

body {
    font-family: "Pretendard Variable", Arial, sans-serif;
}
`;

export default GlobalStyle;
