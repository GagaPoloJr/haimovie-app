export type MediaType = 'movie' | 'tv';

export type GenreId = 
  | 28 | 12 | 16 | 35 | 80 | 99 | 18 | 10751 | 14 | 36 | 27 | 10402 | 9648 | 10749 | 878 | 10770 | 53 | 10752 | 37
  | 10759 | 10762 | 10763 | 10764 | 10765 | 10766 | 10767 | 10768;

type GenreMap = {
  movie: Record<GenreId, string>;
  tv: Record<GenreId, string>;
};

export const getGenreNames = (media_type: MediaType, genre_ids: GenreId[]): string[] => {
  const genres: GenreMap = {
    movie: {
        28: 'Action',
        12: 'Adventure',
        16: 'Animation',
        35: 'Comedy',
        80: 'Crime',
        99: 'Documentary',
        18: 'Drama',
        10751: 'Family',
        14: 'Fantasy',
        36: 'History',
        27: 'Horror',
        10402: 'Music',
        9648: 'Mystery',
        10749: 'Romance',
        878: 'Science Fiction',
        10770: 'TV Movie',
        53: 'Thriller',
        10752: 'War',
        37: 'Western',
        10759: "",
        10762: "",
        10763: "",
        10764: "",
        10765: "",
        10766: "",
        10767: "",
        10768: ""
    },
    tv: {
        10759: 'Action & Adventure',
        16: 'Animation',
        35: 'Comedy',
        80: 'Crime',
        99: 'Documentary',
        18: 'Drama',
        10751: 'Family',
        10762: 'Kids',
        9648: 'Mystery',
        10763: 'News',
        10764: 'Reality',
        10765: 'Sci-Fi & Fantasy',
        10766: 'Soap',
        10767: 'Talk',
        10768: 'War & Politics',
        37: 'Western',
        28: "",
        12: "",
        14: "",
        36: "",
        27: "",
        10402: "",
        10749: "",
        878: "",
        10770: "",
        53: "",
        10752: ""
    },
  };

  return genre_ids.map((genre_id,index) =>`${genres[media_type][genre_id]}${index ==genre_ids.length -1 ? '':' | '}` || 'Unknown Genre');
};

