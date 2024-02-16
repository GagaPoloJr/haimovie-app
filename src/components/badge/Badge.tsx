const Badge = ({ status }: { status: string }) => {
  const badge = status === 'released' ? 'bg-blue-500' : 'bg-green-500';

  return (
    <>
      <span className={`${badge} px-5 py-2 rounded-lg text-white capitalize font-bold `}>
        {status}
      </span>
    </>
  );
};

export default Badge;
