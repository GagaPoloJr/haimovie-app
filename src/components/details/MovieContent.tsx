import { convertTime, formattedDate } from '@/libs/libs';
import Badge from '../badge/Badge';

const DetailMovieContent = ({ movieData }: any) => {
  return (
    <>
      <div className="content px-5 md:px-32 pt-20 pb-20 w-full md:w-2/3 dark:text-slate-300 ">
        <Badge status={movieData.status} />
        <p className=" text-xl mt-5">Release: {formattedDate(movieData?.release_date)}</p>
        <div className="genre-movie  mb-20">
          <div className="flex gap-2 text-sm text-slate-500">
            <p> {convertTime(movieData.runtime)} | </p>

            {movieData.genres.map((genre: any) => (
              <>{genre.name}, &nbsp;</>
            ))}
          </div>
        </div>
        <p className="">{movieData.overview}</p>
        <p className="mt-4">
          Watch On &nbsp;
          <a className="text-red-500" target="_blank" href={movieData.homepage}>
            HaiMovies
          </a>
        </p>
      </div>
    </>
  );
};

export default DetailMovieContent;
