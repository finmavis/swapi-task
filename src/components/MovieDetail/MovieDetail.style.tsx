import styled from 'styled-components';

import { COLOR_WHITE, COLOR_GRAY } from 'src/shared/styles/themes/colors';

export const Wrapper = styled.div`
  margin-bottom: 3rem;
`;

export const Label = styled.h4`
  font-family: inherit;
  font-size: 1.8rem;
  color: ${COLOR_GRAY};
  margin-bottom: 1.5rem;
`;

export const Text = styled.p`
  font-family: inherit;
  font-size: 1.6rem;
  color: ${COLOR_WHITE};
`;
