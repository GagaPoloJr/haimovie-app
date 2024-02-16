const PagingDots = (props: any) => {
  const { className, style, ...otherProps } = props;
  return (
    <>
      <div {...otherProps}  className={`${className}`} style={{ ...style }}></div>
    </>
  );
};

export default PagingDots;
