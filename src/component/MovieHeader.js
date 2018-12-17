import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import formatDate from '../helpers/formatDate';

const MovieHeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.7rem;
`;

const MovieTitle = styled.h3`
  font-family: 'Star Jedi', 'Open Sans', sans-serif;
  font-size: 2.2rem;
  letter-spacing: 2px;

  .btn {
    color: currentColor;
    text-decoration: none;
    cursor: pointer;
  }
`;

const MovieDate = styled.span`
  color: #cac7c8;
  font-size: 1.4rem;
`;

const MovieHeader = ({ id, title, releaseDate }) => (
  <MovieHeaderStyle>
    <MovieTitle>
      <Link className='btn' to={`/movie/${id}`}>
        {title}
      </Link>
    </MovieTitle>
    <MovieDate>{formatDate(releaseDate)}</MovieDate>
  </MovieHeaderStyle>
);

MovieHeader.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
};

export default MovieHeader;
