import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import MovieDetailContent from './MovieDetailContent';

describe('<MovieDetailContent />', () => {
  it('Should render properly', () => {
    const data = {
      title: 'Movie Title',
      director: 'John Doe',
      producer: 'Jonny Stark',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque animi aliquam porro odio excepturi ad odit cum repellat reiciendis enim! Saepe quasi vero, quae accusantium quidem quibusdam excepturi omnis labore!',
      characters: ['Capt', 'Jonny', 'Sins', 'Stark', 'Yoda'],
      planets: ['Earth', 'EA-45'],
      species: [],
      starships: ['Skater', 'Car', 'Motorcycle'],
      vehicles: [],
    };
    const { getByText } = render(
      <Router>
        <MovieDetailContent {...data} />
      </Router>,
    );

    expect(getByText(/movie title/i)).toBeInTheDocument();
    expect(getByText(/john doe/i)).toBeInTheDocument();
    expect(getByText(/jonny stark/i)).toBeInTheDocument();
    expect(getByText(/lorem/i)).toBeInTheDocument();
    expect(getByText(/yoda/i)).toBeInTheDocument();
    expect(getByText(/ea-45/i)).toBeInTheDocument();
    expect(
      getByText(/we don't have any species data yet!/i),
    ).toBeInTheDocument();
    expect(getByText(/skater/i)).toBeInTheDocument();
    expect(
      getByText(/we don't have any vehicles data yet!/i),
    ).toBeInTheDocument();
  });
});
