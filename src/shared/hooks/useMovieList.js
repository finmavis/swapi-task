import { useState, useEffect } from 'react';

// Import all Helpers
import { getAllMovie } from '../helpers/api';

export default function useMovieList() {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      const movieData = await getAllMovie();
      if (mounted) {
        setMovieList(movieData);
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
