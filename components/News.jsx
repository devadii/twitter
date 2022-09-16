const News = ({ data }) => {
  return (
    <div className="flex items-center mt-4">
      <a href={data.url} target="_blank">
        <div className="">
          <p className="font-bold text-sm">{data.title}</p>
          <p className="font-bold  text-sm text-gray-400">{data.source.name}</p>
        </div>
      </a>
      <img
        src={data.urlToImage}
        alt=""
        className="w-[80px] h-[65px] rounded-lg m-1"
      />
    </div>
  );
};

export default News;
