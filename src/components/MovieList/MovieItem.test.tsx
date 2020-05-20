import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import MovieItem from './MovieItem';

describe('<MovieItem />', () => {
  it('Should render properly', () => {
    render(
      <Router>
        <MovieItem
          id={1}
          title='Movie title'
          description='Movie description'
          releaseDate='2010-10-09'
        />
      </Router>
    );

    const titleElement = screen.getByText(/movie title/i);
    const dateElement = screen.getByText(/october/i);
    const descriptionElement = screen.getByText(/movie description.../i);
    const linkElement = screen.getByText(/more info/i);

    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveAttribute('href', '/movie/1');
    expect(dateElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/movie/1');
  });
});
