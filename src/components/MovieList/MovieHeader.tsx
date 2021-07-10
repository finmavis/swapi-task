import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { formatDate } from 'src/shared/helpers/format-date';
import { COLOR_GRAY } from 'src/shared/styles/themes/colors';

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

export default function MovieHeader({
  id,
  title,
  releaseDate,
}: MovieHeaderProps) {
  return (
    <MovieHeaderStyle>
      <MovieTitle>
        <Link to={`/movie/${id}`}>{title}</Link>
      </MovieTitle>
      <MovieDate>{formatDate(releaseDate)}</MovieDate>
    </MovieHeaderStyle>
  );
}

export type MovieHeaderProps = {
  id: number;
  title: string;
  releaseDate: string;
};

MovieHeader.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
};
