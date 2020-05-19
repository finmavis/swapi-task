import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import MovieItem from './MovieItem';

describe('<MovieItem />', () => {
  it('Should render properly', () => {
    const { getByText } = render(
      <Router>
        <MovieItem
          id={1}
          title='Movie title'
          description='Movie description'
          releaseDate='2010-10-09'
        />
      </Router>
    );

    expect(getByText(/movie title/i)).toBeInTheDocument();
    expect(getByText(/movie title/i)).toHaveAttribute('href', '/movie/1');
    expect(getByText(/october/i)).toBeInTheDocument();
    expect(getByText(/movie description.../i)).toBeInTheDocument();
    expect(getByText(/more info/i)).toBeInTheDocument();
    expect(getByText(/more info/i)).toHaveAttribute('href', '/movie/1');
  });
});
