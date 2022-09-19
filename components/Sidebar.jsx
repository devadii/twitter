import { useSession, signIn } from "next-auth/react";
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
  EllipsisHorizontalCircleIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen hidden sm:flex flex-col justify-between p-2 w-max xl:w-auto fixed  ">
      <div className="">
        <div className="cursor-pointer hover:bg-gray-200 rounded-full text-gray-700 w-max p-1">
          <Image width="50px" height="50px" src={twitterPng} />
        </div>
        <div className="">
          <SidebarMenuItems text="Home" Icon={HomeIcon} active />
          <SidebarMenuItems text="Explore" Icon={HashtagIcon} />
          {session && (
            <>
              <SidebarMenuItems text="Notifications" Icon={BellIcon} />
              <SidebarMenuItems text="Messages" Icon={InboxIcon} />
              <SidebarMenuItems text="Bookmarks" Icon={BookmarkIcon} />
              <SidebarMenuItems text="Lists" Icon={ClipboardIcon} />
              <SidebarMenuItems text="Profile" Icon={UserIcon} />
              <SidebarMenuItems text="More" Icon={Bars2Icon} />
            </>
          )}
        </div>
        {session ? (
          <button className="bg-blue-400 text-white rounded-full w-56 h-12 mt-1 shadow-md hover:brightness-95 hidden xl:inline">
            tweet
          </button>
        ) : (
          <button
            onClick={signIn}
            className="bg-blue-400 text-white rounded-full w-56 h-12 mt-1 shadow-md hover:brightness-95 hidden xl:inline"
          >
            Sign In
          </button>
        )}
      </div>
      {session && (
        <div className="flex items-center justify-start mt-auto">
          <div className="flex items-center justify-start">
            <img
              className="w-[50px] h-[50px] rounded-full mr-1"
              src={session.user.image}
              alt=""
            />
            <div className="hidden xl:inline">
              <p className="font-bold">{session.user.name}</p>
              <p className="mt-[-6px]">{session.user.email.split("@")[0]}</p>
            </div>
          </div>
          <EllipsisHorizontalCircleIcon className="hidden xl:inline h-7 ml-4" />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
