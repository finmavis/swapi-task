import React from 'react';
import { useParams } from 'react-router-dom';

import MovieDetailContent from './MovieDetailContent';

import { Container } from 'src/shared/styles/base/grid';
import Loader from 'src/shared/components/Loader/Loader';

import useMovieDetail from 'src/shared/hooks/useMovieDetail';

export default function MovieDetail() {
  const { id } = useParams<{ id: string }>();
  const { loading, movieDetail } = useMovieDetail(Number(id));

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
