// Import all Dependencies
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Import all Helpers
import formatDate from '../../shared/helpers/format-date';

// Import all Themes
import { COLOR_GRAY } from '../../shared/styles/themes/colors';

const MovieHeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.7rem;
`;

const MovieTitle = styled.h3`
  font-family: 'Star Jedi', 'Open Sans', sans-serif;
  font-size: 2.2rem;
  letter-spacing: 2px;
`;

const MovieDate = styled.span`
  color: ${COLOR_GRAY};
  font-size: 1.4rem;
`;

export default function MovieHeader({ id, title, releaseDate }) {
  return (
    <MovieHeaderStyle>
      <MovieTitle>
        <Link to={`/movie/${id}`}>{title}</Link>
      </MovieTitle>
      <MovieDate>{formatDate(releaseDate)}</MovieDate>
    </MovieHeaderStyle>
  );
}

MovieHeader.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
};
