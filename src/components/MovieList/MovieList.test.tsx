import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import MovieList from './MovieList';

import useMovieList from 'src/shared/hooks/useMovieList';

jest.mock('src/shared/hooks/useMovieList');

const mockedUseMovieList = useMovieList as jest.Mock;

describe('<MovieList />', () => {
  afterEach(() => {
    mockedUseMovieList.mockReset();
  });

  test('Should render Loader Component on loading', () => {
    mockedUseMovieList.mockImplementation(() => {
      return {
        loading: true,
      };
    });

    render(
      <Router>
        <MovieList />
      </Router>
    );

    const loader = screen.getByTestId(/loader/i);
    expect(loader).toBeInTheDocument();
  });

  test('Should render Movie List properly', () => {
    mockedUseMovieList.mockImplementation(() => {
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

    render(
      <Router>
        <MovieList />
      </Router>
    );

    const titleElement = screen.getAllByText(/movie title/i);
    const descriptionElement = screen.getAllByText(/movie description/i);
    const linkElement = screen.getAllByText(/more info/i);
    const yearMovieOneElement = screen.getByText(/2010/i);
    const yearMovieTwoElement = screen.getByText(/1996/i);
    const yearMovieThreeElement = screen.getByText(/2015/i);

    expect(titleElement).toHaveLength(3);
    expect(descriptionElement).toHaveLength(3);
    expect(linkElement).toHaveLength(3);
    expect(yearMovieOneElement).toBeInTheDocument();
    expect(yearMovieTwoElement).toBeInTheDocument();
    expect(yearMovieThreeElement).toBeInTheDocument();
  });
});
