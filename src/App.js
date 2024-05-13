import { useSelector } from "react-redux";
import "./App.css";
import LinearDeterminate from "./components/Loading/Progeess";
import Homepage from "./components/Homepage/Homepage";
import VideoPage from "./components/VideoPlayer/VideoPage";
import { Routes, Route, Router } from "react-router-dom";
import Navbar from "./components/Homepage/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import History from "./components/Optionspages/History";

function App() {
  const { loading } = useSelector((state) => state.youtube);
  const { isLoading } = useSelector((state) => state.video);

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className=" h-[100vh] overflow-hidden flex flex-col bg-neutral-950 text-white">
        {loading || (isLoading && <LinearDeterminate />)}
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/history" element={<History />} />
          <Route path="/watch/:id" element={<VideoPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
