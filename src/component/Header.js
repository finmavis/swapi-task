// Dependencies core
import React, { memo } from 'react';
import styled from 'styled-components';

// Assets
import { ReactComponent as Logo } from '../shared/assets/icon/logo.svg';

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

const Header = memo(props => (
  <HeaderStyle>
    <Logo className='logo' />
  </HeaderStyle>
));

export default Header;
