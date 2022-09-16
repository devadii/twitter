import Image from "next/image";
import twitterPng from "../public/twitter.png";
import SidebarMenuItems from "./SidebarMenuItems";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  HashtagIcon,
  HomeIcon,
  InboxIcon,
  UserIcon,
  Bars2Icon,
  Bars3Icon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  return (
    <div className="min-h-screen hidden sm:flex flex-col justify-between p-2 w-max xl:w-auto fixed  ">
      <div className="">
        <div className="cursor-pointer hover:bg-gray-200 rounded-full text-gray-700 w-max p-1">
          <Image width="50px" height="50px" src={twitterPng} />
        </div>
        <div className="">
          <SidebarMenuItems text="Home" Icon={HomeIcon} active />
          <SidebarMenuItems text="Explore" Icon={HashtagIcon} />
          <SidebarMenuItems text="Notifications" Icon={BellIcon} />
          <SidebarMenuItems text="Messages" Icon={InboxIcon} />
          <SidebarMenuItems text="Bookmarks" Icon={BookmarkIcon} />
          <SidebarMenuItems text="Lists" Icon={ClipboardIcon} />
          <SidebarMenuItems text="Profile" Icon={UserIcon} />
          <SidebarMenuItems text="More" Icon={Bars2Icon} />
        </div>
        <button className="bg-blue-400 text-white rounded-full w-56 h-12 mt-1 shadow-md hover:brightness-95 hidden xl:inline">
          tweet
        </button>
      </div>
      <div className="flex items-center justify-start mt-auto">
        <div className="flex items-center justify-start">
          <img
            className="w-[50px] h-[50px] rounded-full mr-1"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFcrh5oo7l9FAEfQ3nG4_jxLcw9m5GeOLcd1-uoXE&s"
            alt=""
          />
          <div className="hidden xl:inline">
            <p className="font-bold">Adil Chaudhary</p>
            <p className="mt-[-6px]">@adil</p>
          </div>
        </div>
        <EllipsisHorizontalCircleIcon className="hidden xl:inline h-7 ml-4" />
      </div>
    </div>
  );
};

export default Sidebar;
