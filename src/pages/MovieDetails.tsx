import CardModalMovie from '@/components/cards/CardModalMovie';
import DetailMovieContent from '@/components/details/MovieContent';
import DetailMovieHeader from '@/components/details/MovieHeader';
import DetailMovieRelated from '@/components/details/MovieRelated';
import { useMovieByMovieId } from '@/hooks/api/movies/useMovieApi';
import { filterYouTubeVideos } from '@/libs/libs';
import { VideoItem, movieProps } from '@/types/types';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [selectedMovie, setSelectedMovie] = useState<movieProps | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const { movieId } = useParams();
  const { data, isLoading, isError } = useMovieByMovieId(parseInt(movieId));

  const { movieData, reccomendationData = [], videosData } = data || {};
  const videoData = videosData ? filterYouTubeVideos(videosData) : [];

  const handleMovieClick = (movie: movieProps) => {
    setSelectedMovie(movie);
    setOpenModal(!openModal);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
    setOpenModal(false);
  };

  if (isLoading) return <p>loading</p>;

  if (isError) return <p>error</p>;
  return (
    <>
      <DetailMovieHeader movieData={movieData} />
      <DetailMovieContent movieData={movieData} />

      <div className="trailer">
        <div className="videos-grid pb-32">
          {videoData.map((video: VideoItem) => (
            <iframe
              key={video.id}
              width="100%"
              height="200"
              src={`https://www.youtube.com/embed/${video.key}`}
              title={video.name}
            ></iframe>
          ))}
        </div>
      </div>

      <DetailMovieRelated
        reccomendationData={reccomendationData}
        handleMovieClick={handleMovieClick}
      />

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

export default MovieDetails;
