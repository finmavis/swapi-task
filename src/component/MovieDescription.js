import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MovieDescriptionStyle = styled.p`
  font-family: inherit;
  color: #fff;
  overflow-wrap: break-word;
  white-space: normal;
  margin-bottom: 2.5rem;
`;

const MovieDescription = ({ description }) => (
  <MovieDescriptionStyle>
    {description.substring(0, 260)}...
  </MovieDescriptionStyle>
);

MovieDescription.propTypes = {
  description: PropTypes.string.isRequired,
};

export default MovieDescription;
