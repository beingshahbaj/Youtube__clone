const API_KEY = "AIzaSyBzSTXIrBHXKoQPLmhHTeGL87z-DyGUYBY";
// const API_KEY = "AIzaSyDa95KzoCkJIH-3CILO7QsE67ufMF7bkLM";
// const API_KEY = "AIzaSyD8O_WLqEMxyxPXQzgKQo6taUE2REbw5Wk";

async function fetchChannelLogo(channelId) {
  try {
    const apiUrl = `https://www.googleapis.com/youtube/v3/channels?id=${channelId}&part=snippet&key=${API_KEY}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.items && data.items.length > 0) {
      const channelLogoUrl = data.items[0].snippet.thumbnails.default.url;
      return channelLogoUrl;
    } else {
      throw new Error("No channel found with the provided ID");
    }
  } catch (error) {
    console.error("Error fetching channel logo:", error);
    throw error;
  }
}
export { fetchChannelLogo };
