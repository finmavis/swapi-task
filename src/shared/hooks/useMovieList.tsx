import { useState, useEffect } from 'react';

import { getAllMovie, MovieDataType } from 'src/shared/helpers/api';

export default function useMovieList(): MovieListHooksType {
  const [movieList, setMovieList] = useState<MovieDataType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      const movieDataType = await getAllMovie();
      if (mounted) {
        setMovieList(movieDataType);
        setLoading(false);
      }
    };

    fetchData();
    return () => {
      mounted = false;
    };
  }, []);

  return {
    loading,
    movieList,
  };
}

export type MovieListHooksType = {
  loading: boolean;
  movieList: MovieDataType[];
};
