import CardSkeleton from '@/components/cards/CardSkeleton';
const LoadingCardSkeleton = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-wrap gap-10">
        {[...Array(10)].map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
    </>
  );
};

export default LoadingCardSkeleton;
