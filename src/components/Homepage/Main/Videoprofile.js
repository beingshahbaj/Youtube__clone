import React, { useState, useEffect, useCallback, useMemo } from "react";
import getRelativeTime from "../../../UtilitiFunction/DateConverter";
import { getYouTubeViewCount } from "../../../UtilitiFunction/ViewCount";
import { fetchChannelLogo } from "../../../UtilitiFunction/Channellogo";
import { useNavigate } from "react-router-dom";
import { MoreVert } from "@mui/icons-material";
import { MenuProps } from "antd";
import { Button, Dropdown, Space } from "antd";

import saveToArray from "../../../UtilitiFunction/SavedatatoLocalstorage";

const useFetchViewCount = (videoId) => {
  const [viewCount, setViewCount] = useState(null);

  const fetchViewCount = useCallback(async () => {
    const res = await getYouTubeViewCount(videoId);
    setViewCount(res);
  }, [videoId]);

  useEffect(() => {
    fetchViewCount();
  }, [fetchViewCount]);

  return viewCount;
};

const useFetchChannelLogo = (channelId) => {
  const [channelLogo, setChannelLogo] = useState(null);

  const fetchLogo = useCallback(async () => {
    const logo = await fetchChannelLogo(channelId);
    setChannelLogo(logo);
  }, [channelId]);

  useEffect(() => {
    fetchLogo();
  }, [fetchLogo]);

  return channelLogo;
};

const VideoProfile = ({ data }) => {
  const navigate = useNavigate();
  const viewCount = useFetchViewCount(data.id.videoId);
  const channelLogo = useFetchChannelLogo(data.snippet.channelId);
  const {
    snippet: { thumbnails, title, description, channelTitle, publishedAt },
  } = data;

  const formattedPublishDate = useMemo(
    () => getRelativeTime(publishedAt),
    [publishedAt]
  );

  return (
    <div className="h-[100%] cursor-pointer flex flex-col shadow-md rounded-lg overflow-hidden">
      <img
        onClick={() => {
          saveToArray(data.id.videoId, "history");
          navigate(`/watch/${data.id.videoId}`);
        }}
        className="w-[100%] object-cover h-48"
        src={thumbnails.medium.url}
        alt={title}
      />
      <div className="p-2 flex-grow">
        <div className="flex ">
          <img
            className="w-8 h-8 rounded-full mr-2"
            src={channelLogo || ""}
            alt={channelTitle}
          />
          <div className="flex-1 ">
            <h2 className="text-sm font-semibold ">{title}</h2>

            <span className="text-sm text-gray-400 ">{channelTitle}</span>
            <div className="flex items-center gap-3 ">
              {viewCount && (
                <p className="text-sm text-gray-400 ">{viewCount} views</p>
              )}
              <p className="text-sm text-gray-400 ">{formattedPublishDate}</p>
            </div>
          </div>
          {/* <Dropdown menu={{ items }} trigger={["click"]}>
            <a className="h-fit" onClick={(e) => e.preventDefault()}>
              <div className="flex text-xs items-center p-1 h-fit hover:bg-neutral-900  rounded-full  cursor-pointer">
                <MoreVert />
              </div>
            </a>
          </Dropdown> */}
        </div>
      </div>
    </div>
  );
};

export default VideoProfile;
