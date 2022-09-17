import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import News from "./News";
import UserSuggestions from "./UserSuggestions";

const Widgets = ({ newsData, usersData }) => {
  const [newsTotal, setNewsTotal] = useState(3);
  const [usersTotal, setUserTotal] = useState(3);

  return (
    <div className="p-2 w-full xl:w-[400px] hidden lg:inline">
      <div className="w-[90%] lg:w-[75%] border border-gray-500 p-1 px-1.5 rounded-2xl flex items-center sticky top-[5px] bg-white">
        <MagnifyingGlassIcon className="h-5 text-gray-600" />
        <input
          type="text"
          placeholder="Search"
          className="placeholder:text-gray-600 border-none h-7 focus:ring-0 w-full"
        />
      </div>
      <div className="w-[90%] lg:w-[75%] text-gray-700 bg-gray-100 p-2 rounded-xl mt-4 mb-4">
        <h2 className="font-bold text-lg">Whats Happening!</h2>
        {newsData.slice(0, newsTotal).map((x, y) => (
          <News key={y} data={x} />
        ))}
        <button
          className="border-none text-blue-500 font-bold hover:salce-90"
          onClick={() => setNewsTotal(newsTotal + 3)}
        >
          Show More
        </button>
      </div>
      <div className="w-[90%] lg:w-[75%] text-gray-700 bg-gray-100 p-2 rounded-xl mt-4 sticky top-[55px]">
        <h2 className="font-bold text-lg">Who to Follow</h2>
        {usersData.slice(0, usersTotal).map((x, y) => (
          <UserSuggestions key={y} data={x} />
        ))}
        <button
          className="border-none text-blue-500 font-bold hover:salce-90 mt-4"
          onClick={() => setUserTotal(usersTotal + 3)}
        >
          Show More
        </button>
      </div>
    </div>
  );
};

export default Widgets;
