import { useState } from 'react';

import CardModalMovie from '@/components/cards/CardModalMovie';
import { movieProps } from '@/types/types';
import FavoriteMovies from '@/layouts/FavoriteMovies';

const Favorite = () => {
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
      <div className="flex flex-col gap-64 pt-32 pb-64">
        <FavoriteMovies handleMovieClick={handleMovieClick} />
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

export default Favorite;
