import { POSTER_PATH_URL, UNAVAILABLE_POSTER } from '@/configs/config';
import { convertRating } from '@/libs/rating';

const DetailMovieHeader = ({ movieData }: any) => {
  const backgroundImage = `${movieData?.backdrop_path ? `${POSTER_PATH_URL}${movieData?.backdrop_path}` : UNAVAILABLE_POSTER}`;
  const styleCard = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };
  return (
    <>
      <div style={styleCard} className="h-[80vh] w-full relative">
        <div
          className={`absolute inset-0 transition-all bg-gradient-to-b from-transparent to-white dark:bg-gradient-to-b dark:from-transparent dark:to-black`}
        >
          <div className="flex items-end px-5 px-5 md:px-32 h-full">
            <div className="z-10 pb-5 text-white gap-2">
              <span className="flex mt-2 text-md gap-1 text-slate-700 dark:text-white">
                <img className="w-4 h-4 mt-1" src="../../rating.svg" alt="" />
                {movieData.vote_average ? convertRating(movieData.vote_average) : 'No Rating Vote'}
              </span>
              <h3 className="text-3xl font-bold text-slate-700 dark:text-white line-clamp-2  md:text-5xl md:line-clamp-none mb-2">
                {movieData.title} |{' '}
                {movieData.original_language !== 'en' ? movieData.original_title : ''}
              </h3>

              <p className="italic text-slate-600 dark:text-slate-300">{movieData.tagline}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailMovieHeader;
