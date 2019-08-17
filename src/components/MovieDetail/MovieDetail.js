// Dependencies core
import React from 'react';

// Component
import Detail from '../../component/Detail';

// Styles
import { Container } from '../../shared/styles/Grid';
import Loader from '../../shared/styles/Loader';

// Import Hooks
import useMovieDetail from '../../shared/hooks/useMovieDetail';

export default function MovieDetail(props) {
  const { loading, movieDetail } = useMovieDetail(props.match.params.id);

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <Detail
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
