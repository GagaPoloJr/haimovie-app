import { ApiResponse, VideoItem } from '@/types/types';

const formattedDate = (inputDate: string) =>
  new Date(inputDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

const convertTime = (timeMovie: number) => {
  const hours = Math.floor(timeMovie / 60);
  const minutes = timeMovie % 60;

  const hoursText = hours > 0 ? `${hours}h` : '';
  const minutesText = minutes > 0 ? ` ${minutes}m` : '';

  return hoursText + minutesText;
};

const filterYouTubeVideos = (data: ApiResponse, maxVideos: number = 3): VideoItem[] => {
  const youtubeVideos = data.results.filter(
    (video) => video.site === 'YouTube' && video.type === 'Trailer'
  );
  return youtubeVideos.slice(0, maxVideos);
};
export { formattedDate, convertTime, filterYouTubeVideos };
