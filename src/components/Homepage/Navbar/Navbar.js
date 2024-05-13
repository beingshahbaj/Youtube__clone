import { MoreVert, Search } from "@mui/icons-material";
import React, { useContext, useEffect } from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { SideContext } from "../../../ContextApi/sidebarContext";
import { Tooltip } from "@mui/material";
import { useDispatch } from "react-redux";
import { fetchYouTubeData } from "../../../Redux/HomeReducer/YoutubeSlice";
function Navbar() {
  const [search, setSearch] = React.useState("");

  const args = { searchQuery: search, maxResults: 21 };
  const dispatch = useDispatch();

  const handlesubmit = () => {
    if (search) {
      dispatch(fetchYouTubeData(args));
    }
  };

  // const { isCollapsed, collapseSidebar } = useContext(SideContext);
  return (
    <div className="backdrop-blur-[48px] bg-neutral-950 min-h-12 w-[100%] flex justify-between items-center px-3 pl-6 z-[1000] sticky top-0 left-0">
      <div className="flex items-center gap-5 px-2 justify-start w-[30%]  cursor-pointer">
        <DehazeIcon />
        <div className="flex items-center  gap-0">
          <img
            className=" h-[20px]"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1920px-YouTube_Logo_2017.svg.png"
            alt="logo"
          />
        </div>
      </div>
      <div className="flex items-center w-[100%]  my-3 ">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          value={search}
          placeholder="Search"
          className="px-6 text-sm  py-[0.4rem] rounded-l-full w-[50%] bg-transparent border-[1px] border-r-0 outline-none  border-neutral-600 text-white"
        />
        <div
          onClick={handlesubmit}
          className=" bg-neutral-600 rounded-r-full px-5 py-1  border-neutral-600  border-[1] cursor-pointer"
        >
          <Tooltip title="search" placement="bottom">
            <Search />
          </Tooltip>
        </div>

        <div className="flex items-center p-1  bg-neutral-600 rounded-full ml-3 cursor-pointer">
          <Tooltip title="Voice Search" placement="bottom">
            <KeyboardVoiceIcon />
          </Tooltip>
        </div>
      </div>

      <div className=" flex items-center cursor-pointer">
        <Tooltip title="setting" placement="bottom">
          {" "}
          <MoreVert />
        </Tooltip>

        <button className="px-2 py-0.5 text-sm rounded-full bg-transparent w-max border-[1px] border-stone-600 text-blue-600 ml-3 flex items-center gap-2">
          <Person2OutlinedIcon />
          Signin
        </button>
      </div>
    </div>
  );
}

export default Navbar;
