import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function LinearDeterminate() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: "100%", height: "2px" }}>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 10, // Adjust the height of the progress bar
          borderRadius: 5, // Add border radius for rounded corners
          backgroundColor: "transparent", // Set the background color for the track
          "& .MuiLinearProgress-bar": {
            backgroundColor: "red", // Set the background color for the progress bar
          },
        }}
      />
    </Box>
  );
}
