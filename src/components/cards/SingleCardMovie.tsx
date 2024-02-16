import { POSTER_PATH_URL, UNAVAILABLE_POSTER } from '@/configs/config';
import { convertRating } from '@/libs/rating';
import { CardMovieProps } from '@/types/types';
import { useState } from 'react';

const SingleCardMovie = ({ movie, onClick }: CardMovieProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const backgroundImage = `${movie.backdrop_path ? `${POSTER_PATH_URL}${movie.backdrop_path}` : UNAVAILABLE_POSTER}`;

  const styleCard = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
  };

  return (
    <>
      <div
        className="relative group cursor-pointer"
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={{ ...styleCard }} className="h-96 md:h-[80vh]"></div>
        <div
          className={`absolute inset-0 transition-all ${!isHovered ? 'bg-gradient-to-b from-transparent to-white dark:bg-gradient-to-t dark:from-black dark:to-black"' : 'hidden'}`}
        >
          <div className="flex items-end p-5 h-full">
            <div className=" z-10 pb-5 text-white gap-2">
              <span className="flex mt-2 text-md gap-1 text-slate-700 dark:text-white">
                <img className="w-4 h-4 mt-1" src="../../rating.svg" alt="" />
                {movie.vote_average ? convertRating(movie.vote_average) : 'No Rating Vote'}
              </span>
              <h3 className="text-3xl font-bold text-slate-700 dark:text-white line-clamp-2  md:text-5xl md:line-clamp-none mb-2">
                {movie.title}{' '}
              </h3>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity text-white overflow-hidden">
          <div className="bg-slate-700 absolute bottom-0 h-[100%] inset-0 opacity-0 transition-opacity group-hover:opacity-70"></div>
          <div className="flex items-end p-5 h-full">
            <div className=" z-10 pb-2">
              <h3 className="text-3xl font-bold line-clamp-2 mb-1">{movie.title} </h3>
              <p className="text-sm line-clamp-3">{movie.overview}</p>
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

export default SingleCardMovie;
