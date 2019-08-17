// Import all Dependencies
import React from 'react';

// Import all Component
import MovieDetailContent from './MovieDetailContent';

// Import all Styles
import { Container } from '../../shared/styles/base/grid';
import Loader from '../../shared/components/Loader/Loader';

// Import all Hooks
import useMovieDetail from '../../shared/hooks/useMovieDetail';

export default function MovieDetail(props) {
  const { loading, movieDetail } = useMovieDetail(props.match.params.id);

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
