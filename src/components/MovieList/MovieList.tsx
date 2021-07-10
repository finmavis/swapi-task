import React from 'react';

import MovieItem from './MovieItem';

import { Container, Row } from 'src/shared/styles/base/grid';
import Loader from 'src/shared/components/Loader/Loader';

import useMovieList from 'src/shared/hooks/useMovieList';

export default function MovieList() {
  const { loading, movieList } = useMovieList();

  return (
    <Container>
      <Row>
        {loading ? (
          <Loader />
        ) : (
          movieList.map((movie) => (
            <MovieItem
              key={movie.id}
              id={movie.id}
              description={movie.description}
              releaseDate={movie.releaseDate}
              title={movie.title}
            />
          ))
        )}
      </Row>
    </Container>
  );
}
