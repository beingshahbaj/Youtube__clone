import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

function Media() {
  return (
    <div className="grid grid-cols-1 gap-4 flex-1">
      {Array.from(new Array(21)).map((index) => (
        <div className="" key={index}>
          <Skeleton
            variant="rectangular"
            width="100%"
            height={170}
            style={{
              marginBottom: 0,
              borderRadius: "10px",
              backgroundColor: "#333",
            }}
          />

          <div className="flex gap-3 items-center">
            <Skeleton
              height={75}
              width={50}
              style={{
                borderRadius: "50%",
                backgroundColor: "#333",
              }}
            />
            <div className="flex-1">
              <Skeleton
                style={{
                  borderRadius: "10px",
                  backgroundColor: "#333",
                }}
              />
              <Skeleton
                width="60%"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "#333",
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function SuggestionSkeleton() {
  return <Media />;
}
