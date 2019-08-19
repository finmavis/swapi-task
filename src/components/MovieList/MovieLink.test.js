import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';

import MovieLink from './MovieLink';

describe('<MovieLink />', () => {
  it('Should render properly', () => {
    const { getByText } = render(
      <Router>
        <MovieLink id={1} />
      </Router>,
    );
    expect(getByText(/more info/i)).toBeInTheDocument();
    expect(getByText(/more info/i)).toHaveAttribute('href', '/movie/1');
  });
});
