import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { formatDate } from '../../shared/helpers/format-date';

import MovieHeader from './MovieHeader';

jest.mock('../../shared/helpers/format-date');

const mockedFormatDate = formatDate as jest.Mock<string>;

describe('<MovieHeader />', () => {
  afterEach(() => {
    mockedFormatDate.mockReset();
  });

  it('Should render properly', () => {
    render(
      <Router>
        <MovieHeader id={1} title='Movie Title' releaseDate='2010-10-20' />
      </Router>
    );

    const titleElement = screen.getByText(/movie title/i);

    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveAttribute('href', '/movie/1');
    expect(mockedFormatDate).toHaveBeenCalledTimes(1);
    expect(mockedFormatDate).toHaveBeenCalledWith('2010-10-20');
  });
});
