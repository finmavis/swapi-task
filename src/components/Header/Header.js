// Import all Dependencies
import React from 'react';
import styled from 'styled-components';

// Import all Assets
import { ReactComponent as Logo } from '../../shared/assets/icon/logo.svg';

// Import all Themes
import { COLOR_YELLOW } from '../../shared/styles/themes/colors';

const HeaderStyle = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 13rem;

  .logo {
    fill: ${COLOR_YELLOW};
    width: 100%;
    max-width: 45rem;
  }
`;

export default function Header() {
  return (
    <HeaderStyle>
      <Logo className='logo' />
    </HeaderStyle>
  );
}
