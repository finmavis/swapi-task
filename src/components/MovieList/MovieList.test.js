import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import MovieList from './MovieList';

import useMovieList from '../../shared/hooks/useMovieList';

jest.mock('../../shared/hooks/useMovieList');

afterEach(() => {
  useMovieList.mockReset();
});

describe('<MovieList />', () => {
  it('Should render Loader Component on loading', () => {
    // Mocks
    useMovieList.mockImplementation(() => {
      return {
        loading: true,
      };
    });

    // Render
    const { getByTestId } = render(
      <Router>
        <MovieList />
      </Router>,
    );

    // Assert
    expect(getByTestId(/loader/i)).toBeInTheDocument();
  });

  it('Should render Movie List properly', () => {
    // Mocks
    useMovieList.mockImplementation(() => {
      return {
        loading: false,
        movieList: [
          {
            id: 1,
            description: 'Movie Description One',
            releaseDate: '2010-05-20',
            title: 'Movie Title One',
          },
          {
            id: 2,
            description: 'Movie Description Two',
            releaseDate: '1996-03-09',
            title: 'Movie Title Two',
          },
          {
            id: 3,
            description: 'Movie Description Three',
            releaseDate: '2015-12-20',
            title: 'Movie Title Three',
          },
        ],
      };
    });

    // Render
    const { getAllByText, getByText } = render(
      <Router>
        <MovieList />
      </Router>,
    );

    // Assert
    expect(getAllByText(/movie title/i)).toHaveLength(3);
    expect(getAllByText(/movie description/i)).toHaveLength(3);
    expect(getAllByText(/more info/i)).toHaveLength(3);
    expect(getByText(/2015/i)).toBeInTheDocument();
    expect(getByText(/1996/i)).toBeInTheDocument();
    expect(getByText(/2010/i)).toBeInTheDocument();
  });
});
