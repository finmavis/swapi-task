import React from 'react';
import styled, { keyframes } from 'styled-components';

import { ReactComponent as LoaderLogo } from 'src/shared/assets/icon/loader.svg';

import { COLOR_YELLOW } from 'src/shared/styles/themes/colors';

const loaderSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoaderStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;

  .loader-logo {
    animation: ${loaderSpin} infinite 2.5s linear;
    height: 8rem;
    fill: ${COLOR_YELLOW};
  }
`;

const Loader = () => (
  <LoaderStyle data-testid='loader'>
    <LoaderLogo className='loader-logo' />
  </LoaderStyle>
);

export default Loader;
