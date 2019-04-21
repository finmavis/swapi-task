// Dependencies core
import React, { Component } from 'react';

// Component
import Detail from '../component/Detail';

// Styles
import { Container } from '../shared/styles/Grid';
import Loader from '../shared/styles/Loader';

// Helper
import { getSingleMovie } from '../shared/helpers/api';

class Movie extends Component {
  state = {
    loading: false,
    characters: [],
    director: null,
    description: null,
    planets: [],
    producer: null,
    releaseDate: null,
    species: [],
    starships: [],
    title: null,
    vehicles: [],
  };

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  };

  async componentDidMount() {
    this.toggleLoading();
    const { id } = this.props.match.params;
    const data = await getSingleMovie(id);
    this.setState({
      loading: false,
      ...data,
    });
  }

  render() {
    const {
      loading,
      title,
      director,
      characters,
      description,
      planets,
      producer,
      species,
      starships,
      vehicles,
    } = this.state;
    return (
      <Container>
        {loading ? (
          <Loader />
        ) : (
          <Detail
            title={title}
            director={director}
            producer={producer}
            description={description}
            characters={characters}
            planets={planets}
            species={species}
            starships={starships}
            vehicles={vehicles}
          />
        )}
      </Container>
    );
  }
}

export default Movie;
