import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import { formatDate } from '../../shared/helpers/format-date';

import MovieHeader from './MovieHeader';

jest.mock('../../shared/helpers/format-date');

afterEach(() => {
  formatDate.mockReset();
});

describe('<MovieHeader />', () => {
  it('Should render properly', () => {
    // Render
    const { getByText } = render(
      <Router>
        <MovieHeader id={1} title='Movie Title' releaseDate='2010-10-20' />
      </Router>
    );

    // Assert
    expect(getByText(/movie title/i)).toBeInTheDocument();
    expect(getByText(/movie title/i)).toHaveAttribute('href', '/movie/1');
    expect(formatDate).toHaveBeenCalledTimes(1);
    expect(formatDate).toHaveBeenCalledWith('2010-10-20');
  });
});
