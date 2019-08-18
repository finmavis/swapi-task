import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import * as helpers from '../../shared/helpers/format-date';

import MovieHeader from './MovieHeader';

describe('<MovieHeader />', () => {
  it('Should render properly', () => {
    // Mocks
    jest.spyOn(helpers, 'formatDate');
    helpers.formatDate.mockImplementation(date => date);

    // Render
    const { getByText } = render(
      <Router>
        <MovieHeader id={1} title='Movie Title' releaseDate='2010-10-20' />
      </Router>,
    );

    // Assert
    expect(getByText(/movie title/i)).toBeInTheDocument();
    expect(getByText(/movie title/i)).toHaveAttribute('href', '/movie/1');
    expect(helpers.formatDate).toHaveBeenCalledTimes(1);
    expect(helpers.formatDate).toHaveBeenCalledWith('2010-10-20');

    // Cleanup
    helpers.formatDate.mockRestore();
  });
});
