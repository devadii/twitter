import { SparklesIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import Input from "./Input";
import Post from "./Post";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

const Feed = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const unsub = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );
  }, []);

  return (
    <div className="h-full max-w-xl min-w-[400px] sm:ml-[75px] xl:ml-[270px] border-l border-r ">
      <div className="flex items-center justify-between p-1 xl:p-2 border-b sticky top-0 bg-white">
        <p className="text-lg font-bold">Home</p>
        <SparklesIcon className="h-5" />
      </div>
      <Input />
      <div className=" h-full">
        {posts && posts.map((post, index) => <Post post={post} key={index} />)}
      </div>
    </div>
  );
};

export default Feed;
