const UserSuggestions = ({ data }) => {
  return (
    <div className="flex items-center justify-between mt-4">
      <div className="flex items-center">
        <img
          src={data.picture.large}
          alt=""
          className="h-[50px] w-[50px] mr-2 rounded-full"
        />
        <div className="">
          <p className="font-bold text-sm">{data.login.username}</p>
          <p className="text-sm text-gray-400">
            {data.name.first + " " + data.name.last}
          </p>
        </div>
      </div>
      <button className="py-1 px-4 rounded-lg bg-blue-500 text-white">
        Follow
      </button>
    </div>
  );
};

export default UserSuggestions;
