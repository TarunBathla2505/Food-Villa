const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-3 pl-3 drop-shadow-2xl">
      {Array(20)
        .fill("")
        .map((item, index) => (
          <div
            className="  min-h-96 max-h-96 w-56 rounded-md border-2"
            key={index}
          ></div>
        ))}
    </div>
  );
};
export default Shimmer;
