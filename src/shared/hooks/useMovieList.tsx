import { useState, useEffect } from 'react';

import { getAllMovie } from '../helpers/api';

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

export type MovieDataType = {
  id: number;
  title: string;
  description: string;
  releaseDate: string;
};
