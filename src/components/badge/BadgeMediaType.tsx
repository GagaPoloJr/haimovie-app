const BadgeMediaType = (mediaType: string) => {
  const badge = mediaType === 'tv' ? 'bg-blue-500' : 'bg-yellow-500';

  return (
    <>
      <span className={`${badge} px-5 py-2 rounded-lg text-white capitalize font-bold`}>
        {mediaType}
      </span>
    </>
  );
};

export default BadgeMediaType;
