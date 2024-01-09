import { NavigateBeforeOutlined, NavigateNext } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import React from "react";

const SecondaryNavbar = () => {
  return (
    <div className="px-2">
      <div className="mt-2 flex justify-between">
        {/* navigation button */}
        <div className="flex">
          <IconButton className="text-white flex justify-center items-center">
            <NavigateBeforeOutlined />
          </IconButton>
          <IconButton className="text-white flex justify-center items-center">
            <NavigateNext />
          </IconButton>
        </div>

        {/* login buttons */}
        <div className="flex items-center p-2 justify-between">
          <button className="text-gray-300 font-semibold mr-6">Sign up</button>
          <button className="px-6 font-semibold py-2 bg-white rounded-3xl text-black">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondaryNavbar;
