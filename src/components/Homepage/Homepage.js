import React from "react";
import VideoList from "./Main/VideoList";
import Sidebar from "./Sidebar/Sidebara";
import { useSelector } from "react-redux";

function Homepage() {
  const { data, loading, error } = useSelector((state) => state.youtube);
  console.log(data);
  return (
    <div className="flex  flex-grow o overflow-hidden h-[80%]">
      <Sidebar />
      <VideoList data={data} loading={loading} error={error} />
    </div>
  );
}

export default Homepage;
