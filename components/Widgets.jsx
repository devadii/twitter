import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import News from "./News";

const Widgets = () => {
  const [news, setNews] = useState([]);
  const [total, setTotal] = useState(3);

  useEffect(() => {
    const getNews = async () => {
      const response = await fetch(
        "https://saurav.tech/NewsAPI/everything/cnn.json"
      );
      const finalNews = await response.json();
      setNews(finalNews.articles);
    };
    getNews();
  }, []);

  return (
    <div className="p-2 w-full xl:w-[400px] hidden lg:inline">
      <div className="w-[90%] lg:w-[75%] border border-gray-500 p-1 px-1.5 rounded-2xl flex items-center ">
        <MagnifyingGlassIcon className="h-5 text-gray-600" />
        <input
          type="text"
          placeholder="Search"
          className="placeholder:text-gray-600 border-none h-7 focus:ring-0 w-full"
        />
      </div>
      <div className="w-[90%] lg:w-[75%] text-gray-700 bg-gray-100 p-2 rounded-xl mt-4">
        <h2 className="font-bold text-lg">Whats Happening!</h2>
        {news && news.slice(0, total).map((x, y) => <News key={y} data={x} />)}
        <button
          className="border-none text-blue-500 font-bold hover:salce-90"
          onClick={() => setTotal(total + 3)}
        >
          Show More
        </button>
      </div>
    </div>
  );
};

export default Widgets;
