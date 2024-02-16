import { useState } from 'react';

import CardModalMovie from '@/components/cards/CardModalMovie';
import { movieProps } from '@/types/types';
import LatestMovies from '@/layouts/latest/LatestMovies';

const Latest = () => {
  const [selectedMovie, setSelectedMovie] = useState<movieProps | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const handleMovieClick = (movie: movieProps) => {
    setOpenModal(!openModal);
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
    setOpenModal(false);
  };

  return (
    <>
      <div className="flex flex-col gap-64 py-32">
        <LatestMovies isSinglePage={false} handleMovieClick={handleMovieClick} />
      </div>
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

export default Latest;
