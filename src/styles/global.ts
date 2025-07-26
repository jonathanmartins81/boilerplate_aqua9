import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    min-height: 100vh;
    font-family: 'Inter', sans-serif;
    background-color: #001d3d;
    color: #ffffff;
  }

  #__next {
    min-height: 100vh;
  }
`;

export default GlobalStyle;
