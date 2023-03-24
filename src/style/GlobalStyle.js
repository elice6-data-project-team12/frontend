import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  body{
    height:100%;
  }
`;

export default GlobalStyle;
