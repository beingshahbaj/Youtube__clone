import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const API_KEY = "AIzaSyBzSTXIrBHXKoQPLmhHTeGL87z-DyGUYBY";
// const API_KEY = "AIzaSyDa95KzoCkJIH-3CILO7QsE67ufMF7bkLM";
// const API_KEY = "AIzaSyD8O_WLqEMxyxPXQzgKQo6taUE2REbw5Wk";

export const fetchVideoData = createAsyncThunk(
  "video/fetchVideoData",
  async (videoId, { rejectWithValue }) => {
    try {
      const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=snippet,statistics`;
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.items && data.items.length > 0) {
        console.log(data);
        return data.items[0];
      } else {
        toast.error("No video found with the provided ID");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch video data");
      return rejectWithValue(error.message);
    }
  }
);

const videoSlice = createSlice({
  name: "video",
  initialState: {
    data: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideoData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchVideoData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchVideoData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default videoSlice.reducer;
