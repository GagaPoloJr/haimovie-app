// useFavorites.jsx
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const useFavorites = () => {
  const queryClient = useQueryClient();

  const getFavorites = () => {
    const favoritesString = sessionStorage.getItem('favorites');
    return favoritesString ? JSON.parse(favoritesString) : [];
  };

  const setFavorites = (favorites: any) => {
    sessionStorage.setItem('favorites', JSON.stringify(favorites));
  };

  const toggleFavorite = (movie: any) => {
    const favorites = getFavorites();

    const isMovieInFavorites = favorites.some((fav: any) => fav.id === movie.id);

    const updatedFavorites = isMovieInFavorites
      ? favorites.filter((fav: any) => fav.id !== movie.id)
      : [...favorites, {...movie, media_tpye:'movie'}];

    !isMovieInFavorites
      ? toast.success('Success add to favorite!')
      : toast.error('Success remove your favorite');

    setFavorites(updatedFavorites);
    queryClient.invalidateQueries({ queryKey: ['favorites'] });
  };

  return { getFavorites, toggleFavorite };
};

export default useFavorites;
