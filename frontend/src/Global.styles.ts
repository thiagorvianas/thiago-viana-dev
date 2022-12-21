import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    border: 0;
    box-sizing: border-box;
    margin: 0;
    outline: none;
    padding: 0;
    font-family: 'Fira Code', monospace;
    background-color: #011627;
    color: #E5E9F0;
    text-decoration: none;
  }
  
  @font-face {
    src: url(https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&display=swap');
  }
  
  :root {
    border: 1px solid #1E2D3D;
    min-height: 100vh;
    font-size: 18px;
  }
`;

export default GlobalStyles;