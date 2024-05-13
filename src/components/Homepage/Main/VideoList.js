// YouTubeComponent.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchYouTubeData } from "../../../Redux/HomeReducer/YoutubeSlice";
import VideoProfile from "./Videoprofile";
import { belowNavbarSuggestions } from "./SearchList";

import {
  NavigateBefore,
  NavigateNext,
  SkipPrevious,
} from "@mui/icons-material";
import YouTube from "../../Loading/Skeleton";
import { toast } from "react-toastify";

const VideoList = ({ data, loading, error }) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("all");
  const args = { searchQuery: search, maxResults: 21 };
  useEffect(() => {
    dispatch(fetchYouTubeData(args));
  }, [dispatch, search]);

  return (
    <div className="overflow-y-scroll flex-1">
      <ul className="z-50 p-4 pr-0 flex gap-2 w-max overflow-x-hidden sticky top-0 bg-zinc-950">
        {/* <div className="  flex items-center px-2 rounded-full bg-neutral-600">
          <NavigateBefore />
        </div> */}
        <li
          onClick={() => setSearch("all")}
          className=" capitalize cursor-pointer px-3 text-zinc-950 text-sm text-center p-1 w-max rounded-md"
          style={{
            background: search === "all" ? "white" : "rgb(59, 59, 59)",
            color: search === "all" ? "black" : "white",
            transition: "all 0.2s ease-in-out",
          }}
        >
          All
        </li>
        {belowNavbarSuggestions.slice(0, 12).map((item, i) => (
          <li
            onClick={() => setSearch(item)}
            style={{
              background: search === item ? "white" : "rgb(59, 59, 59)",
              color: search === item ? "black" : "white",
              transition: "all 0.2s ease-in-out",
            }}
            className=" capitalize cursor-pointer px-3  text-sm text-center p-1 w-max rounded-md"
            key={i}
          >
            {item}
          </li>
        ))}
        {/* <div className=" absolute right-0 flex items-center px-2 rounded-full bg-neutral-600">
          <NavigateNext />
        </div> */}
      </ul>
      <div className="w-[100%] h-max overflow-y-scroll">
        {loading ? (
          <YouTube />
        ) : error ? (
          <div className="w-[100%]  flex flex-col  items-center">
            <img
              className="w-[50%] h-[400px]"
              src="https://img.freepik.com/free-vector/403-error-forbidden-with-police-concept-illustration_114360-1904.jpg?t=st=1715495235~exp=1715498835~hmac=c2142db66379a3971017b79f34178ffbd2378ac5f2042ac2f6d60ceb75be5eea&w=740"
              alt="error"
            />
            <h1 className="text-red-500 text-lg ">{error}</h1>
          </div>
        ) : (
          <div className=" grid-cols-3 grid gap-4 my-3 px-5">
            {data.length > 0 ? (
              data.map((videoData) => (
                <div key={videoData.id} className="">
                  <VideoProfile data={videoData} />
                </div>
              ))
            ) : (
              <h1>no data avlaible</h1>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoList;
