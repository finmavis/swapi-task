import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import MovieDetailHeader from './MovieDetailHeader';
import MovieDetailDescription from './MovieDetailDescription';
import MovieDetailList from './MovieDetailList';

import { MovieDetailType } from 'src/shared/helpers/api';
import { COLOR_WHITE, COLOR_BACKGROUND } from 'src/shared/styles/themes/colors';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${COLOR_BACKGROUND};
  color: ${COLOR_WHITE};
  font-size: 1.6rem;
  padding: 3rem;
  border-radius: 0.5rem;
`;

export default function MovieDetailContent({
  title,
  director,
  producer,
  description,
  characters,
  planets,
  species,
  starships,
  vehicles,
}: MovieDetailType) {
  return (
    <Wrapper>
      <MovieDetailHeader
        title={title}
        director={director}
        producer={producer}
      />
      <MovieDetailDescription description={description} />
      <MovieDetailList label='Characters' list={characters} />
      <MovieDetailList label='Planets' list={planets} />
      <MovieDetailList label='Species' list={species} />
      <MovieDetailList label='Starships' list={starships} />
      <MovieDetailList label='Vehicles' list={vehicles} />
    </Wrapper>
  );
}

MovieDetailContent.propTypes = {
  title: PropTypes.string,
  director: PropTypes.string,
  producer: PropTypes.string,
  description: PropTypes.string,
  characters: PropTypes.array,
  planets: PropTypes.array,
  species: PropTypes.array,
  starships: PropTypes.array,
  vehicles: PropTypes.array,
};
