import CardMovie from '@/components/cards/CardMovie';

const DetailMovieRelated = ({ reccomendationData, handleMovieClick, setOpenModal }: any) => {
  const { results: data } = reccomendationData;

  if (!data.length)
    return (
      <>
        <div className="flex mb-10">
          <h2 className="text-3xl">Reccomendation</h2>
        </div>
        <p>No Movie</p>
      </>
    );
  return (
    <>
      <div className="flex mb-10 mx-28">
        <h2 className="text-3xl dark:text-slate-300 font-bold">Reccomendation</h2>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-10 pt-20 py-64">
        {data.map((item: any) => (
          <CardMovie
            onClick={() => handleMovieClick(item)}
            key={item.id}
            movie={{
              title: item.title,
              poster_path: item.poster_path,
              overview: item.overview,
              vote_average: item.vote_average,
              media_type: item.media_type,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default DetailMovieRelated;
