import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Logo } from './assets/icon/logo.svg';

const HeaderStyle = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 13rem;

  .logo {
    fill: #ffe81f;
    width: 100%;
    max-width: 45rem;
  }
`;

const Header = props => (
  <HeaderStyle>
    <Logo className='logo' />
  </HeaderStyle>
);

export default Header;
