import { useState } from 'react';

import CardModalMovie from '@/components/cards/CardModalMovie';
import { movieProps } from '@/types/types';
import LatestMovies from '@/layouts/latest/LatestMovies';
import SingleLatestMovies from '@/layouts/latest/SingleLatestMovies';
import PopularMovies from '@/layouts/PopularMovies';
import SearchBar from '@/components/search/SearchBar';
import SearchResults from '@/layouts/SearchMovies';
import { useSearchMovies } from '@/hooks/api/movies/useMovieApi';

const Homepage = () => {
  const [selectedMovie, setSelectedMovie] = useState<movieProps | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const { data, isLoading: searchLoading, isError: searchError } = useSearchMovies(searchQuery);

  const results = data?.results.map((movie: movieProps) => ({
    ...movie,
    media_type: 'movie',
  }));
  const handleMovieClick = (movie: movieProps) => {
    setOpenModal(!openModal);
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
    setOpenModal(false);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  if (searchLoading) return <p></p>;

  if (searchError) return <p>Error fetching search results</p>;

  return (
    <>
      {results.length > 0 && (
        <div className="py-20 w-full md:w-1/3 mx-0 md:mx-24">
          <SearchBar onSearch={handleSearch} />
        </div>
      )}{' '}
      {results && results.length > 0 ? (
        <SearchResults
          isLoading={searchLoading}
          isError={searchError}
          data={results}
          handleMovieClick={handleMovieClick}
          query={searchQuery}
        />
      ) : (
        <div className="flex flex-col gap-32">
          {!searchLoading && !searchError && (
            <>
              <SingleLatestMovies handleMovieClick={handleMovieClick} />
              <div className=" w-full md:w-1/3 px-5 md:mx-24">
                <SearchBar onSearch={handleSearch} />
              </div>
              <LatestMovies isSinglePage={true} handleMovieClick={handleMovieClick} />
              <PopularMovies isSinglePage={true} handleMovieClick={handleMovieClick} />
            </>
          )}
        </div>
      )}
      {selectedMovie && openModal && (
        <CardModalMovie
          isOpen={openModal}
          handleCloseModal={handleCloseModal}
          movie={selectedMovie}
        />
      )}
    </>
  );
};

export default Homepage;
