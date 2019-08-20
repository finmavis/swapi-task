import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import MovieDetailHeader from './MovieDetailHeader';

describe('<MovieDetailHeader />', () => {
  it('Should render list item if have any list', () => {
    const { getByText } = render(
      <Router>
        <MovieDetailHeader
          title='Movie Title'
          director='John Doe'
          producer='Jonny Stark'
        />
      </Router>,
    );

    expect(getByText(/back/i)).toHaveAttribute('href', '/');
    expect(getByText(/movie title/i)).toBeInTheDocument();
    expect(getByText(/director/i)).toHaveTextContent(/john doe/i);
    expect(getByText(/producer/i)).toHaveTextContent(/jonny stark/i);
  });
});
