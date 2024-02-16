import { GenreId } from '@/libs/genre';

export type modalProps = {
  isOpen: boolean;
  handleCloseModal: () => void;
};

export interface movieProps {
  id?: number;
  title: string;
  name?: string;
  poster_path?: string;
  overview?: string;
  vote_average?: number;
  genre_ids?: GenreId[];
  media_type?: 'movie' | 'tv';
  backdrop_path?: string;
}

export interface CardMovieProps {
  movie: movieProps;
  onClick: () => void;
 
}

export type VideoItem = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
};

export type ApiResponse = {
  results: VideoItem[];
};
