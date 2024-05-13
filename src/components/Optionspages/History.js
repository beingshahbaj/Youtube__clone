import React, { useEffect, useState } from "react";
import Sidebar from "../Homepage/Sidebar/Sidebara";
import VideoList from "../Homepage/Main/VideoList";
import { useDispatch, useSelector } from "react-redux";
import { fetchYouTubeData } from "../../Redux/HomeReducer/YoutubeSlice";

function History() {
  const [Historydata, setHistorydata] = useState([]);
  const { data, loading, error } = useSelector((state) => state.youtube);
  const historydata = localStorage.getItem("history");

  useEffect(() => {
    if (historydata) {
      const filtereddata = data.filter((item) => {
        return historydata.includes(item.id.videoId);
      });
      setHistorydata(filtereddata);
    }
  }, [data]);

  console.log(data);

  return (
    <div className="flex overflow-hidden flex-grow h-[80%]">
      <Sidebar />
      <VideoList data={Historydata} loading={loading} error={error} />
    </div>
  );
}

export default History;
