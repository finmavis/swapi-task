// Import all Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Import all Styles
import { Wrapper, Label, Text } from './MovieDetail.style';

export default function MovieDetailDescription({ description }) {
  return (
    <Wrapper>
      <Label>Description</Label>
      <Text>{description}</Text>
    </Wrapper>
  );
}

MovieDetailDescription.propTypes = {
  description: PropTypes.string,
};
