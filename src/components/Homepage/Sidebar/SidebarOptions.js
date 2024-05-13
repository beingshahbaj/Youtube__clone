import React from "react";
import { useNavigate } from "react-router-dom";
function SidebarOptions({ logo, name }) {
  const navigate = useNavigate();
  return (
    <li className="hover flex items-center gap-5  justify-start  cursor-pointer  p-1 pl-2 rounded-md">
      {logo}
      <div className="flex items-center gap-0">
        <p className="">{name}</p>
      </div>
    </li>
  );
}

export default SidebarOptions;
