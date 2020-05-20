import React from 'react';
import { useParams } from 'react-router-dom';

import MovieDetailContent from './MovieDetailContent';

import { Container } from '../../shared/styles/base/grid';
import Loader from '../../shared/components/Loader/Loader';

import useMovieDetail from '../../shared/hooks/useMovieDetail';

export default function MovieDetail() {
  const { id } = useParams();
  const { loading, movieDetail } = useMovieDetail(id);

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <MovieDetailContent
          title={movieDetail.title}
          director={movieDetail.director}
          producer={movieDetail.producer}
          description={movieDetail.description}
          characters={movieDetail.characters}
          planets={movieDetail.planets}
          species={movieDetail.species}
          starships={movieDetail.starships}
          vehicles={movieDetail.vehicles}
        />
      )}
    </Container>
  );
}
