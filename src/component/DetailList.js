import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Wrapper, Label } from './styles/Detail';

const WrapperCustom = styled(Wrapper)`
  padding-top: 3rem;
  border-top: 2px solid #3c3c3c;
`;

const WrapperList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 1.8rem;
`;

const ListItem = styled.li`
  width: 100%;
  position: relative;
  flex: 0 0 100%;
  max-width: 100%;

  @media (min-width: 48em) {
    flex: 0 0 calc(100% / 2);
    max-width: calc(100% / 2);
  }

  @media (min-width: 62em) {
    flex: 0 0 calc(100% / 3);
    max-width: calc(100% / 3);
  }
`;

const DetailList = ({ label, list }) => (
  <WrapperCustom>
    <Label>{label}</Label>
    {list.length ? (
      <WrapperList>
        {list.map((data, i) => (
          <ListItem key={i}>{data}</ListItem>
        ))}
      </WrapperList>
    ) : (
      <p>We don't have any {label} data yet!</p>
    )}
  </WrapperCustom>
);

DetailList.propTypes = {
  label: PropTypes.string.isRequired,
  list: PropTypes.array,
};

export default DetailList;
