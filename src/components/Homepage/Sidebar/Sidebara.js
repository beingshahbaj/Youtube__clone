import React, { Navlink } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  Feedback,
  GamepadOutlined,
  Help,
  History,
  Home,
  LiveTv,
  NavigateNext,
  Newspaper,
  PlaylistAdd,
  QueueMusic,
  Settings,
  ShoppingBag,
  SortSharp,
  Subscriptions,
  SupervisedUserCircle,
  ThumbUp,
  TrendingUp,
  VideoFile,
  VideoLabel,
  WatchLater,
} from "@mui/icons-material";
import SidebarOptions from "./SidebarOptions";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sticky bottom-0 left-0 w-[16%] text-slate-200 h-[100vh] flex flex-col py-3 px-6 bg-neutral-950  overflow-y-scroll pb-16">
      <ul className="flex flex-col justify-center text-sm  ">
        <SidebarOptions logo={<Home />} name="Home" />

        <SidebarOptions logo={<SortSharp />} name="sorts" />
        <SidebarOptions logo={<Subscriptions />} name="Subscriptions" />
      </ul>
      <hr className=" border-neutral-600 my-3" />
      <ul className="flex flex-col justify-center text-sm ">
        <h2 className="font-bold text-[1rem] pl-2">
          You <NavigateNext />
        </h2>
        <SidebarOptions logo={<SupervisedUserCircle />} name="Channel" />
        <NavLink to="/history">
          <SidebarOptions logo={<History />} name="History" />
        </NavLink>

        <SidebarOptions logo={<PlaylistAdd />} name="Playlist" />
        <SidebarOptions logo={<VideoFile />} name="Your video" />
        <SidebarOptions logo={<WatchLater />} name="WatchLater" />
        <SidebarOptions logo={<ThumbUp />} name="Like" />
      </ul>
      <hr className=" border-neutral-600 my-3" />

      <ul className="flex flex-col justify-center text-sm ">
        <h2 className="font-bold text-[1rem] pl-2">
          Explore <NavigateNext />
        </h2>

        <SidebarOptions logo={<TrendingUp />} name="Tranding" />
        <SidebarOptions logo={<ShoppingBag />} name="Shoping" />
        <SidebarOptions logo={<QueueMusic />} name="Music" />
        <SidebarOptions logo={<VideoLabel />} name="Video" />
        <SidebarOptions logo={<LiveTv />} name="Live" />
        <SidebarOptions logo={<GamepadOutlined />} name="Gaming" />
        <SidebarOptions logo={<Newspaper />} name="News" />
      </ul>
      <hr className=" border-neutral-600 my-3" />

      <ul className="flex flex-col justify-center text-sm ">
        {" "}
        <SidebarOptions logo={<Settings />} name="Settings" />
        <SidebarOptions logo={<Help />} name="Help" />
        <SidebarOptions logo={<Feedback />} name="Feedback" />
      </ul>
    </div>
  );
}

export default Sidebar;
