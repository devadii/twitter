import {
  ChartBarIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  EllipsisHorizontalIcon,
  HeartIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

const Post = ({ post }) => {
  return (
    <div className="p-1 xl:p-2 flex border-t border-b w-full">
      <img
        className="w-[50px] h-[50px] rounded-full cursor-pointer hover:brightness-90"
        src={post.userImg}
        alt=""
      />
      <div className="w-full px-2">
        <div className="flex items-center justify-between ">
          <div className="flex items-center">
            <p className="font-bold pr-1 xl:pr-2 cursor-pointer hover:brightness-90 hover:underline whitespace-nowrap">
              {post.name}
            </p>
            <p className="text-gray-600 text-sm pr-1 xl:pr-2 hover:underline cursor-pointer whitespace-nowrap leading-loose">
              {"@" + post.username}
            </p>
            <p className="text-gray-600 whitespace-nowrap">{post.timestamp}</p>
          </div>
          <EllipsisHorizontalIcon className="h-9 p-2 cursor-pointer hover:brightness-90 hover:scale-95" />
        </div>
        <div className="">
          <p className="mt-[-8px]">{post.text}</p>
          <img src={post.img} alt="" className="w-full rounded-2xl my-2" />
        </div>
        <div className="text-gray-600 flex items-center justify-between p-2">
          <ChatBubbleOvalLeftEllipsisIcon className="h-5 cursor-pointer hover:brightness-90 hover:scale-95 hover:text-blue-500" />
          <TrashIcon className="h-5 cursor-pointer hover:brightness-90 hover:scale-95 hover:text-red-500" />
          <HeartIcon className="h-5 cursor-pointer hover:brightness-90 hover:scale-95 hover:text-red-500" />
          <ShareIcon className="h-5 cursor-pointer hover:brightness-90 hover:scale-95 hover:text-blue-500" />
          <ChartBarIcon className="h-5 cursor-pointer hover:brightness-90 hover:scale-95 hover:text-blue-500" />
        </div>
      </div>
    </div>
  );
};

export default Post;
