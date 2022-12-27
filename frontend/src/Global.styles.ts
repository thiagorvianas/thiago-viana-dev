import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    border: 0;
    box-sizing: border-box;
    margin: 0;
    outline: none;
    padding: 0;
    font-family: 'Fira Code', monospace;
    text-decoration: none;
    overflow: hidden;

    @media (max-width: 1023px) {
      overflow: auto;
    }
  }
  
  @font-face {
    src: url(https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&display=swap');
  }
  
  :root {
    font-size: 18px;
    background-color: #011627;
  }
`;

export const ViewPort = styled.section`
  height: 100vh;
`;

export default GlobalStyles;