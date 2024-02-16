const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} right-10 md:right-32 z-50`}
      style={{ ...style, display: 'block'}}
      onClick={onClick}
    />
  );
};

export default NextArrow;
