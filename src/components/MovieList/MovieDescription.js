// Import all Dependencies
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Import all Themes
import { COLOR_WHITE } from '../../shared/styles/themes/colors';

const MovieDescriptionStyle = styled.p`
  font-family: inherit;
  color: ${COLOR_WHITE};
  overflow-wrap: break-word;
  white-space: normal;
  margin-bottom: 2.5rem;
`;

export default function MovieDescription({ description }) {
  return (
    <MovieDescriptionStyle>
      {description.substring(0, 260)}...
    </MovieDescriptionStyle>
  );
}

MovieDescription.propTypes = {
  description: PropTypes.string.isRequired,
};
