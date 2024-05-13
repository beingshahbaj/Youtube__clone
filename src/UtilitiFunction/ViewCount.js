const API_KEY = "AIzaSyBzSTXIrBHXKoQPLmhHTeGL87z-DyGUYBY";
// const API_KEY = "AIzaSyDa95KzoCkJIH-3CILO7QsE67ufMF7bkLM";
// const API_KEY = "AIzaSyD8O_WLqEMxyxPXQzgKQo6taUE2REbw5Wk";

export async function getYouTubeViewCount(videoId) {
  try {
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=statistics`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.items && data.items.length > 0) {
      const viewCount = data.items[0].statistics.viewCount;

      const count = formatViewCount(viewCount);
      return count;
    }
  } catch (error) {
    console.error("Error fetching view count:", error);
    throw error;
  }
}

function formatViewCount(viewCount) {
  if (viewCount >= 1000000000) {
    return `${(viewCount / 1000000000).toFixed(1)}B`;
  } else if (viewCount >= 1000000) {
    return `${(viewCount / 1000000).toFixed(1)}M`;
  } else if (viewCount >= 1000) {
    return `${(viewCount / 1000).toFixed(1)}K`;
  } else {
    return viewCount.toString();
  }
}
