import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import MovieDetailContent from './MovieDetailContent';

import { MOVIE_DETAIL_MOCK_DATA } from '../../shared/constants/mock-data.constant';

describe('<MovieDetailContent />', () => {
  it('Should render properly', () => {
    const { getByText } = render(
      <Router>
        <MovieDetailContent {...MOVIE_DETAIL_MOCK_DATA} />
      </Router>,
    );

    expect(getByText(/something title/i)).toBeInTheDocument();
    expect(getByText(/Jonny Sins/i)).toBeInTheDocument();
    expect(getByText(/Jonny Stark/i)).toBeInTheDocument();
    expect(getByText(/lorem/i)).toBeInTheDocument();
    expect(getByText(/yoda/i)).toBeInTheDocument();
    expect(getByText(/ea-45/i)).toBeInTheDocument();
    expect(getByText(/cat/i)).toBeInTheDocument();
    expect(
      getByText(/we don't have any starships data yet!/i),
    ).toBeInTheDocument();
    expect(getByText(/car/i)).toBeInTheDocument();
  });
});
