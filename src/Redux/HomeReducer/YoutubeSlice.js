// youtubeSlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

// const API_KEY = "AIzaSyBzSTXIrBHXKoQPLmhHTeGL87z-DyGUYBY";
const API_KEY = "AIzaSyDa95KzoCkJIH-3CILO7QsE67ufMF7bkLM";
// const API_KEY = "AIzaSyD8O_WLqEMxyxPXQzgKQo6taUE2REbw5Wk";
const BASE_URL = "https://www.googleapis.com/youtube/v3";

export const fetchYouTubeData = createAsyncThunk(
  "youtube/fetchYouTubeData",
  async (args) => {
    const { searchQuery, maxResults } = args;
    try {
      const response = await axios.get(`${BASE_URL}/search`, {
        params: {
          key: API_KEY,
          q: searchQuery,
          maxResults: maxResults,
          part: "snippet",
        },
      });
      return response.data.items;
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch data");
      throw error;
    }
  }
);

const YoutubeSlice = createSlice({
  name: "youtube",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchYouTubeData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchYouTubeData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchYouTubeData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default YoutubeSlice.reducer;
