// import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import {
  fetchLatestMovies,
  fetchMovieById,
  fetchPopularMovies,
  fetchSearchMovies,
} from './movieApi';

/** latest movies */
export const useLatestMovies = () => {
  return useInfiniteQuery({
    queryKey: ['latestMovies'],
    queryFn: fetchLatestMovies,
    getNextPageParam: (lastPage, _pages) =>
      lastPage.nextPage <= lastPage.totalPages ? lastPage.nextPage : undefined,
    initialPageParam: undefined,
  });
};

/** latest movies */
export const useSingleLatestMovies = () => {
  return useQuery({
    queryKey: ['latestMoviesSingle'],
    queryFn: async () => await fetchLatestMovies({ pageParam: 1 }),
  });
};

/** POPULAR */
export const usePopularMovies = () => {
  return useInfiniteQuery({
    queryKey: ['popularMovies'],
    queryFn: fetchPopularMovies,
    getNextPageParam: (lastPage, _pages) =>
      lastPage.nextPage <= lastPage.totalPages ? lastPage.nextPage : undefined,
    initialPageParam: undefined,
  });
};

export const useSearchMovies = (query: string) => {
  return useQuery({
    queryKey: ['searchMovies', query],
    queryFn: async () => await fetchSearchMovies(query),
  });
};

export const useMovieByMovieId = (movieId: number) => {
  return useQuery({
    queryKey: ['movie', movieId],
    queryFn: async () => await fetchMovieById(movieId),
  });
};
