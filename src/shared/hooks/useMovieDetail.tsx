import { useState, useEffect } from 'react';
import { getSingleMovie, MovieDetailType } from 'src/shared/helpers/api';

export default function useMovieDetail(
  movieId: number
): UseMovieDetailHooksType {
  const [movieDetail, setMovieDetail] = useState<MovieDetailType>({
    title: null,
    director: null,
    producer: null,
    description: null,
    characters: [],
    planets: [],
    species: [],
    starships: [],
    vehicles: [],
  });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      const movieData = await getSingleMovie(movieId);
      if (mounted) {
        setMovieDetail(movieData);
        setLoading(false);
      }
    };

    fetchData();
    return () => {
      mounted = false;
    };
  }, [movieId]);

  return {
    loading,
    movieDetail,
  };
}

export type UseMovieDetailHooksType = {
  loading: boolean;
  movieDetail: MovieDetailType;
};
