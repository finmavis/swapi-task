import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Label, Text } from './MovieDetail.style';

export default function MovieDetailDescription({
  description,
}: MovieDetailDescriptionProps) {
  return (
    <Wrapper>
      <Label>Description</Label>
      <Text>{description}</Text>
    </Wrapper>
  );
}

export type MovieDetailDescriptionProps = {
  description: string | null;
};

MovieDetailDescription.propTypes = {
  description: PropTypes.string,
};
