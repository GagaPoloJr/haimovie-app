import api from '@/utils/apiService';
import { movieProps } from '@/types/types';
import { toast } from 'react-toastify';

export const fetchLatestMovies = async ({ pageParam = 1 }) => {
  try {
    const response = await api.get(`/movie/now_playing?page=${pageParam}`);
    const latestMovies = response.data.results.map((movie: movieProps) => ({
      ...movie,
      media_type: 'movie',
    }));
    return {
      latestMovies,
      nextPage: response.data.page + 1,
      totalPages: response.data.total_pages,
    };
  } catch (error) {
    toast.error(`Something went wrong: ${error.message}`);
    console.error('Error fetching latest movies:', error);
    throw error;
  }
};

export const fetchPopularMovies = async ({ pageParam = 1 }) => {
  try {
    const response = await api.get(`/movie/popular?page=${pageParam}`);
    const popularMovies = response.data.results.map((movie: movieProps) => ({
      ...movie,
      media_type: 'movie',
    }));
    return {
      popularMovies,
      nextPage: response.data.page + 1,
      totalPages: response.data.total_pages,
    };
  } catch (error) {
    toast.error(`Something went wrong: ${error.message}`);
    console.error('Error fetching popular movies:', error);
    throw error;
  }
};

export const fetchSearchMovies = async (query: string) => {
  try {
    const response = await api.get(`/search/movie?query=${query}&language=en-US`);
    return response.data;
  } catch (error) {
    toast.error(`Something went wrong: ${error.message}`);
    throw new Error(error.response?.data?.status_message || 'Failed to fetch search results');
  }
};
export const fetchMovieById = async (movieId: number) => {
  try {
    const [movieResponse, videosResponse, recResponse] = await Promise.all([
      api.get(`/movie/${movieId}?language=en-US`),
      api.get(`/movie/${movieId}/videos?language=en-US`),
      api.get(`/movie/${movieId}/recommendations?language=en-US&page=1`),
    ]);
    return {
      movieData: movieResponse.data,
      videosData: videosResponse.data,
      reccomendationData: recResponse.data,
      status: movieResponse.status,
    };
  } catch (error) {
    toast.error(`Something went wrong: ${error.message}`);
    console.error('Error fetching latest movies:', error);
  }
};

// export const fetchNowPlayingMovies = async ({ pageParam = 1 }) => {
//   try {
//     const response = await axios.get(`${MOVIE_API_URL}/now_playing?api_key=${API_KEY}&page=${pageParam}`);
//     const nowPlayingMovies = response.data.results.map((movie: movieProps) => ({
//       ...movie,
//       media_type: 'movie',
//     }));
//     return {
//       nowPlayingMovies,
//       nextPage: response.data.page + 1,
//       totalPages: response.data.total_pages,
//     };
//   } catch (error) {
//     console.error('Error fetching now playing movies:', error);
//     throw error;
//   }
// };
