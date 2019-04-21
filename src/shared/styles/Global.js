import { createGlobalStyle } from 'styled-components';

import Background from '../assets/images/background.png';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');

  @font-face {
    font-family: 'Star Jedi';
    font-style: normal;
    font-weight: 400;
    src: local('Star Jedi'), local('StarJedi'),
      url('../component/assets/fonts/Starjedi.ttf') format('truetype');
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
    color: #fff;
    background-color: #232323;
  }

  #root {
    background: url(${Background});
    background-size: contain;
    min-height: 100vh;
    padding-bottom: 2rem;
  }
`;

export default GlobalStyle;
