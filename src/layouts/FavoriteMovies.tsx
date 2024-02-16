import CardMovie from '@/components/cards/CardMovie';
import useFavorites from '@/hooks/api/movies/useFavorite';

const FavoriteMovies = ({ handleMovieClick }: any) => {
  const { getFavorites } = useFavorites();

  return (
    <>
      <div className="h-min-[100vh]">
        <div className="flex mx-5 md:mx-24 mb-10 justify-between md:justify-start items-center gap-10">
          <h2 className="text-3xl font-bold dark:text-slate-200">Your Favorites Movies</h2>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-10">
          {getFavorites().map((item: any) => (
            <CardMovie
              onClick={() => handleMovieClick(item)}
              key={item.id}
              movie={{
                title: item.title,
                poster_path: item.poster_path,
                overview: item.overview,
                vote_average: item.vote_average,
                media_type: item.media_type,
                genre_ids: item.genre_ids,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FavoriteMovies;
