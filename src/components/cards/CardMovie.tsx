import { useEffect, useState } from 'react';

import { POSTER_PATH_URL, UNAVAILABLE_POSTER } from '@/configs/config';
import useFavorites from '@/hooks/api/movies/useFavorite';
import { convertRating } from '@/libs/rating';
import { CardMovieProps } from '@/types/types';

import { FaHeart } from "react-icons/fa6";
const CardMovie = ({ movie, onClick }: CardMovieProps) => {
  const backgroundImage = `${movie.poster_path ? `${POSTER_PATH_URL}${movie.poster_path}` : UNAVAILABLE_POSTER}`;



  const styleCard = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minWidth: '280px',
    width: '100%',
  };

  const { getFavorites, toggleFavorite } = useFavorites();

  const [isFavorite, setIsFavorite] = useState(
    getFavorites().some((fav: any) => fav.id === movie.id)
  );

  useEffect(() => {
    setIsFavorite(getFavorites().some((fav: any) => fav.id === movie.id));
  }, [getFavorites, movie.id]);

  const handleToggleFavorite = () => {
    toggleFavorite(movie);

    // Update the local state
    setIsFavorite(!isFavorite);
  };

 

  return (
    <>
      <div className="relative group">
        <div style={styleCard} className="h-80 rounded-3xl"></div>

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity text-white overflow-hidden">
          <div className="bg-slate-700 absolute bottom-0 h-[100%] inset-0 opacity-0 transition-opacity rounded-3xl group-hover:opacity-70"></div>

          <div className="flex">
            <div className="absolute z-10 top-5 right-5">
              <button className='' onClick={handleToggleFavorite}>
                {isFavorite ? <FaHeart size={20} color='red'/> : <FaHeart size={20}/>}
              </button>
            </div>
          </div>
          <div onClick={onClick} className="flex justify-end items-end p-5 h-full cursor-pointer">
            <div className=" z-10 pb-2 h-2/3 flex flex-col justify-end">
              <h3 className=" font-bold line-clamp-2">{movie.title} </h3>
              <p className="text-xs line-clamp-3">{movie.overview}</p>
              <span className="flex mt-2 text-xs gap-1">
                <img className="w-4 h-4" src="../../rating.svg" alt="" />
                {movie.vote_average ? convertRating(movie.vote_average) : 'No Rating Vote'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardMovie;
