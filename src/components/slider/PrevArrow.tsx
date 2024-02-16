const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} left-2 md:left-20 z-50 `}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
};

export default PrevArrow;
