import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Label, Text } from './styles/Detail';

const DetailDescription = ({ description }) => (
  <Wrapper>
    <Label>Description</Label>
    <Text>{description}</Text>
  </Wrapper>
);

DetailDescription.propTypes = {
  description: PropTypes.string,
};

export default DetailDescription;
