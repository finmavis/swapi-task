import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import MovieDetailContent from './MovieDetailContent';

import { MOVIE_DETAIL_MOCK_DATA } from '../../shared/constants/mock-data.constant';

describe('<MovieDetailContent />', () => {
  it('Should render properly', () => {
    render(
      <Router>
        <MovieDetailContent {...MOVIE_DETAIL_MOCK_DATA} />
      </Router>
    );

    const titleElement = screen.getByText(/something title/i);
    const directorElement = screen.getByText(/Jonny Sins/i);
    const producerElement = screen.getByText(/Jonny Stark/i);
    const descriptionElement = screen.getByText(/lorem/i);
    const characterElement = screen.getByText(/yoda/i);
    const planetElement = screen.getByText(/ea-45/i);
    const speciesElement = screen.getByText(/cat/i);
    const starshipElement = screen.getByText(
      /we don't have any starships data yet!/i
    );
    const vehicleElement = screen.getByText(/car/i);

    expect(titleElement).toBeInTheDocument();
    expect(directorElement).toBeInTheDocument();
    expect(producerElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(characterElement).toBeInTheDocument();
    expect(planetElement).toBeInTheDocument();
    expect(speciesElement).toBeInTheDocument();
    expect(starshipElement).toBeInTheDocument();
    expect(vehicleElement).toBeInTheDocument();
  });
});
