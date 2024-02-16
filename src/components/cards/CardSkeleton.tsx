import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CardSkeleton = () => {
  const styleCard = {
    minWidth: '280px',
  };
  return (
    <>
      <div style={styleCard} className="h-80 rounded relative">
        <Skeleton containerClassName="flex-1" className="rounded-3xl" height="100%" />
      </div>
    </>
  );
};

export default CardSkeleton;
