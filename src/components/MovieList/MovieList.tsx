import React from 'react';

import MovieItem from './MovieItem';

import { Container, Row } from '../../shared/styles/base/grid';
import Loader from '../../shared/components/Loader/Loader';

import useMovieList from '../../shared/hooks/useMovieList';

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
