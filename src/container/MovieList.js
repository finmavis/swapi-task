// Dependencies core
import React, { Component } from 'react';

// Component
import MovieItem from '../component/MovieItem';

// Styles
import { Container, Row } from '../shared/styles/Grid';
import Loader from '../shared/styles/Loader';

// Helper
import { getAllMovie } from '../shared/helpers/api';

class MovieList extends Component {
  state = {
    loading: false,
    movieList: [],
  };

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  };

  async componentDidMount() {
    this.toggleLoading();
    const movieData = await getAllMovie();
    this.setState({
      loading: false,
      movieList: movieData,
    });
  }

  render() {
    const { loading, movieList } = this.state;
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
}

export default MovieList;
