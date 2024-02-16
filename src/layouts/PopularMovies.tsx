import React from 'react';
import CardMovie from '@/components/cards/CardMovie';
import { useLatestMovies, usePopularMovies } from '@/hooks/api/movies/useMovieApi';
import LoadingCardSkeleton from '@/components/loading/LoadingCardSkeleton';
import { Link } from 'react-router-dom';
import { useCurrentPath } from '@/hooks/useCurrentRoute';

const PopularMovies = ({ handleMovieClick, isSinglePage }: any) => {
  const { data, fetchNextPage, hasNextPage, isError, isLoading } = usePopularMovies();

  if (isLoading) {
    return <LoadingCardSkeleton />;
  }

  const loadMoreButton = () => {
    return (
      <>
        <div className="flex justify-center my-10">
          <button
            className="text-sm font-bold bg-red-800 text-slate-300 px-10 py-2 rounded-lg hover:bg-red-950"
            onClick={() => fetchNextPage()}
            disabled={isError || isLoading}
          >
            Load More
          </button>
        </div>
      </>
    );
  };
  if (isError) {
    return <p>Error fetching latest movies</p>;
  }

  return (
    <>
      <div className="h-min-[100vh]">
        <div className="flex mx-5 md:mx-24 mb-10 justify-between md:justify-start items-center gap-10">
          <h2 className="text-3xl font-bold dark:text-slate-200">Popular Movies</h2>

          {isSinglePage && (
            <Link
              to={`popular`}
              className="text-slate-600 transition-all ease-in duration-200 hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-500"
            >
              More Movies
            </Link>
          )}
        </div>
        <div className="flex justify-center items-center flex-wrap gap-10">
          {data.pages.map((page, pageIndex) => (
            <React.Fragment key={pageIndex}>
              {page.popularMovies.map((item: any) => (
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
            </React.Fragment>
          ))}
        </div>
        {hasNextPage && loadMoreButton()}
      </div>
    </>
  );
};

export default PopularMovies;
