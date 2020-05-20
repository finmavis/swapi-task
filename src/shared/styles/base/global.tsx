import { createGlobalStyle } from 'styled-components';

import { COLOR_WHITE, COLOR_BLACK } from '../themes/colors';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Star Jedi';
    font-style: normal;
    font-weight: 400;
    src: local('Star Jedi'), local('StarJedi'),
      url('../component/assets/fonts/Starjedi.ttf') format('truetype');
    display: swap;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;

    /* 768px */
    @media screen and (max-width: 48em) {
      font-size: 56.25%;
    }

    /* 576px */
    @media screen and (max-width: 36em) {
      font-size: 50%;
    }
  }

  body {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.6rem;
    overflow-y: scroll;
    color: ${COLOR_WHITE};
    background-color: ${COLOR_BLACK};
    padding-bottom: 2rem;
  }

  a,
  a:link,
  a:hover,
  a:focus {
    color: currentColor;
    text-decoration: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
