import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';

import MovieLink from './MovieLink';

describe('<MovieLink />', () => {
  it('Should render properly', () => {
    render(
      <Router>
        <MovieLink id={1} />
      </Router>
    );

    const linkElement = screen.getByText(/more info/i);

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/movie/1');
  });
});
