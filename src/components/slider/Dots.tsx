const Dots = ({ dots }: any) => {
  return (
    <>
      <div
        className="flex justify-center"
        style={{
          borderRadius: '10px',
          padding: '10px',
        }}
      >
        <ul className="flex gap-1" style={{ margin: '0px' }}>
          {' '}
          {dots}{' '}
        </ul>
      </div>
    </>
  );
};

export default Dots;
