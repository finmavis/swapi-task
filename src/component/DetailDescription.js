// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { Wrapper, Label, Text } from '../shared/styles/Detail';

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
