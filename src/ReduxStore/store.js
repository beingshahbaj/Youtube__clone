import { configureStore } from "@reduxjs/toolkit";
import YoutubeSlice from "../Redux/HomeReducer/YoutubeSlice";
import VideoSlice from "../Redux/VideoReducer/VideoSlice";

const store = configureStore({
  reducer: {
    youtube: YoutubeSlice,
    video: VideoSlice,
  },
});

export default store;
