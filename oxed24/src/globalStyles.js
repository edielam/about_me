// src/globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    cursor: url('path-to-custom-cursor.svg'), auto;
  }

  h2, h3, p, button {
    text-shadow: 0 0 10px #0ff;
  }
`;

export default GlobalStyle;
