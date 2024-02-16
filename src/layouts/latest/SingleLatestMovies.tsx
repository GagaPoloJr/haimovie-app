import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useSingleLatestMovies } from '@/hooks/api/movies/useMovieApi';
import CardSkeleton from '@/components/cards/CardSkeleton';
import { movieProps } from '@/types/types';
import SingleCardMovie from '@/components/cards/SingleCardMovie';
import NextArrow from '@/components/slider/NextArrow';
import PrevArrow from '@/components/slider/PrevArrow';
import Dots from '@/components/slider/Dots';
import PagingDots from '@/components/slider/PagingDots';
import { useState } from 'react';


const responsive = [
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
    },
  },
];

const optionSetting ={
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  autoplay: true,
  draggable: false,
  lazyLoad: true,
  slidesToScroll: 1,
  responsive: responsive,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  appendDots: (dots: any) => <Dots dots={dots} />,
}




const SingleLatestMovies = ({ handleMovieClick }: any) => {
  const { data, isError, isLoading } = useSingleLatestMovies();
  const latestMovies = data?.latestMovies || [];

  const [currIndex, setCurrIndex] = useState(0);
  const sliderSettings = {
    ...optionSetting,
    afterChange: (currentSlide: number) => {
     setCurrIndex(currentSlide)
    },
    customPaging: (i: number) => (
      <PagingDots
        className={` cursor-pointer ${i == currIndex ? 'bg-indigo-700' : 'bg-slate-300 dark:bg-white'}`}
        style={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
        }}
      />
    ),
  };

  if (isLoading) {
    return (
      <div className="flex flex-wrap gap-10">
        {[...Array(2)].map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (isError) {
    return <p>Error fetching latest movies</p>;
  }

  return (
    <Slider {...sliderSettings}>
      {latestMovies.map((item: movieProps) => (
        <div key={item.id}>
          <SingleCardMovie
            onClick={() => handleMovieClick(item)}
            movie={{
              title: item.title,
              poster_path: item.poster_path,
              backdrop_path: item.backdrop_path,
              overview: item.overview,
              vote_average: item.vote_average,
              media_type: item.media_type,
            }}
          />
        </div>
      ))}
    </Slider>
  );
};

export default SingleLatestMovies;
