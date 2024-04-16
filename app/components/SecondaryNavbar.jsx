"use client";

import { NavigateBeforeOutlined, NavigateNext } from "@mui/icons-material";
import { Modal } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import React, { useState } from "react";
import LoginModel from "../Model/LoginModel";

const SecondaryNavbar = () => {
  const [loginModelOpen, setLoginModelOpen] = useState(false);
  return (
    <div className="px-2">
      <div className="mt-2 flex justify-between">
        {/* navigation button */}
        <div className="flex">
          <IconButton className="flex justify-center items-center">
            <NavigateBeforeOutlined sx={{ color: "white" }} />
          </IconButton>
          <IconButton className="flex justify-center items-center">
            <NavigateNext sx={{ color: "white" }} />
          </IconButton>
        </div>

        {/* login buttons */}
        <div className="flex items-center p-2 justify-between">
          <button className="text-gray-300 font-semibold mr-6">Sign up</button>
          <button
            onClick={() => setLoginModelOpen(true)}
            className="px-6 font-semibold py-2 bg-white rounded-3xl text-black"
          >
            Login
          </button>
        </div>
      </div>
      {/* Login Model */}
      <>
        <Modal open={loginModelOpen} onClose={() => setLoginModelOpen(false)}>
          <div className="">
            <LoginModel />
          </div>
        </Modal>
      </>
    </div>
  );
};

export default SecondaryNavbar;
