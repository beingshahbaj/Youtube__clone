import React, { useEffect } from "react";
import SuggestionSkeleton from "../Loading/Suggestion-skeleton";
import { useSelector } from "react-redux";
import VideoProfile from "../Homepage/Main/Videoprofile";

const VideoSuggestion = () => {
  const { data, loading, error } = useSelector((state) => state.youtube);
  const { isLoading } = useSelector((state) => state.video);
  debugger;
  return (
    <div className="w-[35%]">
      {isLoading ? (
        <SuggestionSkeleton />
      ) : (
        <div className=" grid-cols-1 grid gap-4 ">
          {data.length > 0 &&
            data.map((videoData) => (
              <div key={videoData.id} className="">
                <VideoProfile data={videoData} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default VideoSuggestion;
