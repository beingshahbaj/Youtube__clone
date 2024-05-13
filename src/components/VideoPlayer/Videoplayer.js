import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideoData } from "../../Redux/VideoReducer/VideoSlice";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { Skeleton } from "@mui/material";

const VideoPlayer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.video);

  useEffect(() => {
    dispatch(fetchVideoData(id));
  }, [id]);

  console.log(data);
  const videoUrl = `https://www.youtube.com/watch?v=${id}`;

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center w-[65%] h-[500px]">
          <Skeleton
            variant="rectangular"
            width="100%"
            height="100%"
            style={{ borderRadius: "1rem", backgroundColor: "#333" }}
          />
        </div>
      ) : (
        <div className="flex justify-center items-center w-[65%] h-[500px] mt-3 rounded-lg">
          <ReactPlayer
            url={videoUrl}
            playing
            controls
            width="100%"
            height="100%"
            style={{ borderRadius: "1rem" }}
          />
        </div>
      )}
    </>
  );
};

export default VideoPlayer;
