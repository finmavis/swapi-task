import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import MovieDetailHeader from './MovieDetailHeader';

describe('<MovieDetailHeader />', () => {
  it('Should render list item if have any list', () => {
    render(
      <Router>
        <MovieDetailHeader
          title='Movie Title'
          director='John Doe'
          producer='Jonny Stark'
        />
      </Router>
    );

    const backLinkElement = screen.getByText(/back/i);
    const titleElement = screen.getByText(/movie title/i);
    const directorElement = screen.getByText(/director/i);
    const producerElement = screen.getByText(/producer/i);

    expect(backLinkElement).toHaveAttribute('href', '/');
    expect(titleElement).toBeInTheDocument();
    expect(directorElement).toHaveTextContent(/john doe/i);
    expect(producerElement).toHaveTextContent(/jonny stark/i);
  });
});
