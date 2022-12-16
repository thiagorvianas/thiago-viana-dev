import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`  
  * {
    border: 0;
    box-sizing: border-box;
    font-family: monospace, sans-serif;
    margin: 0;
    outline: none;
    padding: 0;
  }

  :root {
    font-size: 14px;
  }

  ::selection {
    background-color: grey;
    color: #fff;
  }

  ::-webkit-scrollbar {
    height: 4px;
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    opacity: 0.4;
  }

  body {
    background-color: #212121;
    color: #fffafa;
    height: 100vh;
    min-height: 500px;
  }
`;

export default GlobalStyles;