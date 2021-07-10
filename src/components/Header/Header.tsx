import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Logo } from 'src/shared/assets/icon/logo.svg';

import { COLOR_YELLOW } from 'src/shared/styles/themes/colors';

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
