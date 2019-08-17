import { useState, useEffect } from 'react';
import { getSingleMovie } from '../helpers/api';

export default function useMovieDetail(movieId) {
  const [movieDetail, setMovieDetail] = useState({
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
  const [loading, setLoading] = useState(true);

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
