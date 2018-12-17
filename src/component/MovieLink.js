import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieLinkStyle = styled.p`
  padding-top: 1.2rem;
  font-size: 1.4rem;
  text-transform: capitalize;
  border-top: 2px solid #8e2e2e;
  color: #ffe81f;

  .btn {
    color: currentColor;
    text-decoration: none;
    cursor: pointer;
  }
`;

const MovieLink = ({ id }) => (
  <MovieLinkStyle>
    <Link className='btn' to={`/movie/${id}`}>
      More info
    </Link>
  </MovieLinkStyle>
);

MovieLink.propTypes = {
  id: PropTypes.number.isRequired,
};

export default MovieLink;
