import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import MovieDetail from './MovieDetail';
import useMovieDetail from 'src/shared/hooks/useMovieDetail';

import { MOVIE_DETAIL_MOCK_DATA } from 'src/shared/constants/mock-data.constant';

jest.mock('src/shared/hooks/useMovieDetail');

const mockedUseMovieDetail = useMovieDetail as jest.Mock<any>;

describe('<MovieDetail />', () => {
  afterEach(() => {
    mockedUseMovieDetail.mockReset();
  });

  test('Should render Loader component', () => {
    mockedUseMovieDetail.mockImplementation(() => {
      return {
        loading: true,
      };
    });
    const { getByTestId } = render(
      <Router>
        <MovieDetail />
      </Router>
    );

    expect(getByTestId(/loader/i)).toBeInTheDocument();
  });

  test('Should render Movie Detail properly', () => {
    mockedUseMovieDetail.mockImplementation(() => {
      return {
        loading: false,
        movieDetail: {
          ...MOVIE_DETAIL_MOCK_DATA,
        },
      };
    });
    const { getByText } = render(
      <Router>
        <MovieDetail />
      </Router>
    );

    expect(getByText(/something title/i)).toBeInTheDocument();
    expect(getByText(/Jonny Sins/i)).toBeInTheDocument();
    expect(getByText(/Jonny Stark/i)).toBeInTheDocument();
    expect(getByText(/lorem/i)).toBeInTheDocument();
    expect(getByText(/yoda/i)).toBeInTheDocument();
    expect(getByText(/ea-45/i)).toBeInTheDocument();
    expect(getByText(/cat/i)).toBeInTheDocument();
    expect(
      getByText(/we don't have any starships data yet!/i)
    ).toBeInTheDocument();
    expect(getByText(/car/i)).toBeInTheDocument();
  });
});
