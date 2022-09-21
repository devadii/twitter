import {
  ChartBarIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  EllipsisHorizontalIcon,
  HeartIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Moment from "react-moment";
import { db } from "../firebase";

const Post = ({ post }) => {
  const { data: session } = useSession();
  const [likes, setLikes] = useState();

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "posts", post.id, "likes"),
      (snapshot) => {
        console.log(snapshot.docs);
      }
    );
  }, []);
  const likePost = async () => {
    await setDoc(doc(db, "posts", post.id, "likes", session.user.uid), {
      likedBy: session.user.name,
    });
  };
  return (
    <div className="p-1 xl:p-2 flex border-t border-b w-full">
      <img
        className="w-[50px] h-[50px] rounded-full cursor-pointer hover:brightness-90"
        src={post.data().userImg}
        alt=""
      />
      <div className="w-full px-2">
        <div className="flex items-center justify-between ">
          <div className="flex items-center">
            <p className="font-bold pr-1 xl:pr-2 cursor-pointer hover:brightness-90 hover:underline whitespace-nowrap">
              {post.data().name}
            </p>
            <p className="text-gray-600 text-sm pr-1 md:pr-2 xl:pr-3 hover:underline cursor-pointer whitespace-nowrap leading-loose">
              {"@" + post.data().email.split("@")[0]}
            </p>
            <p className="text-gray-600 whitespace-nowrap">
              {" "}
              <Moment fromNow>{post.data()?.timestamp?.toDate()}</Moment>
            </p>
          </div>
          <EllipsisHorizontalIcon className="h-9 p-2 cursor-pointer hover:brightness-90 hover:scale-95" />
        </div>
        <div className="">
          <p className="mt-[-8px]">{post.data().text}</p>
          <img
            src={post.data().postImg}
            alt=""
            className="w-full rounded-2xl my-2"
          />
        </div>
        <div className="text-gray-600 flex items-center justify-between p-2">
          <ChatBubbleOvalLeftEllipsisIcon className="h-5 cursor-pointer hover:brightness-90 hover:scale-95 hover:text-blue-500" />
          <TrashIcon className="h-5 cursor-pointer hover:brightness-90 hover:scale-95 hover:text-red-500" />
          <HeartIcon
            onClick={likePost}
            className="h-5 cursor-pointer hover:brightness-90 hover:scale-95 hover:text-red-500"
          />
          <ShareIcon className="h-5 cursor-pointer hover:brightness-90 hover:scale-95 hover:text-blue-500" />
          <ChartBarIcon className="h-5 cursor-pointer hover:brightness-90 hover:scale-95 hover:text-blue-500" />
        </div>
      </div>
    </div>
  );
};

export default Post;
