// Import all Dependencies
import React from 'react';

// Import all Component
import MovieItem from './MovieItem';

// Imprort all Styles
import { Container, Row } from '../../shared/styles/Grid';
import Loader from '../../shared/styles/Loader';

// Import all hooks
import useMovieList from '../../shared/hooks/useMovieList';

export default function MovieList(props) {
  const { loading, movieList } = useMovieList();

  return (
    <Container>
      <Row>
        {loading ? (
          <Loader />
        ) : (
          movieList.map(movie => (
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
