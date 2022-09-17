import { SparklesIcon } from "@heroicons/react/24/outline";
import Input from "./Input";
import Post from "./Post";

const posts = [
  {
    id: 1,
    name: "Adil Chaudhary",
    username: "adil",
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFcrh5oo7l9FAEfQ3nG4_jxLcw9m5GeOLcd1-uoXE&s",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0EOR-_9hc0pmoqNTsiZeI_hetgAuLdFEGzw&usqp=CAU",
    text: "nice view",
    timestamp: "3 hours ago",
  },
  {
    id: 1,
    name: "Adil Chaudhary",
    username: "adil",
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFcrh5oo7l9FAEfQ3nG4_jxLcw9m5GeOLcd1-uoXE&s",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0EOR-_9hc0pmoqNTsiZeI_hetgAuLdFEGzw&usqp=CAU",
    text: "nice view",
    timestamp: "3 hours ago",
  },
  {
    id: 1,
    name: "Adil Chaudhary",
    username: "adil",
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFcrh5oo7l9FAEfQ3nG4_jxLcw9m5GeOLcd1-uoXE&s",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
    text: "Its looking so much good. Oh my god, holy moly, so nice oh hell.",
    timestamp: "3 hours ago",
  },
  {
    id: 1,
    name: "Adil Chaudhary",
    username: "adil",
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFcrh5oo7l9FAEfQ3nG4_jxLcw9m5GeOLcd1-uoXE&s",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0EOR-_9hc0pmoqNTsiZeI_hetgAuLdFEGzw&usqp=CAU",
    text: "nice view",
    timestamp: "3 hours ago",
  },
];

const Feed = () => {
  return (
    <div className="h-full max-w-xl sm:ml-[75px] xl:ml-[270px] border-l border-r ">
      <div className="flex items-center justify-between p-1 xl:p-2 border-b sticky top-0 bg-white">
        <p className="text-lg font-bold">Home</p>
        <SparklesIcon className="h-5" />
      </div>
      <Input />
      <div className=" h-full">
        {posts.map((post) => (
          <Post post={post} key={post.key} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
