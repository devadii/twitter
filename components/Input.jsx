import { FaceSmileIcon, PhotoIcon } from "@heroicons/react/24/outline";
import React from "react";

const Input = () => {
  return (
    <div className="p-1 xl:p-2 flex">
      <img
        className="w-[50px] h-[50px] rounded-full cursor-pointer hover:brightness-90 "
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFcrh5oo7l9FAEfQ3nG4_jxLcw9m5GeOLcd1-uoXE&s"
        alt=""
      />
      <div className="w-full ml-1">
        <textarea
          cols="30"
          rows="5"
          className="w-full p-1  border-0 border-b placeholder:text-gray-700 placeholder:tracking-wide focus:ring-0 "
          placeholder="What's Happening!"
        ></textarea>
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center justify-start">
            <PhotoIcon className="h-7 text-sky-500 cursor-pointer hover:brightness-90 pr-1 hover:scale-95" />
            <FaceSmileIcon className="h-7 text-sky-500 cursor-pointer hover:brightness-90 hover:scale-95" />
          </div>
          <button className="bg-blue-500 text-white font-bold rounded-full px-4 py-1.5 hover:brightness-90 disabled:opacity-50">
            Tweent
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
