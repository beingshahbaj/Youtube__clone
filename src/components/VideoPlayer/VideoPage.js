import React from "react";
import VideoPlayer from "./Videoplayer";
import VideoSuggestion from "./VideoSuggestion";
import { useParams } from "react-router-dom";

function VideoPage() {
  return (
    <div className=" px-8 mt-5 flex gap-4 w-[100%] overflow-y-scroll ">
      <VideoPlayer />
      <VideoSuggestion />
    </div>
  );
}

export default VideoPage;
