const Shimmer = () => {
  return (
    <div className="">
      {Array(20)
        .fill("")
        .map((item, index) => (
          <div className="" key={index}></div>
        ))}
    </div>
  );
};
export default Shimmer;
