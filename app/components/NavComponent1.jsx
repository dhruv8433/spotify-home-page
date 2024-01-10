import { Home, Search } from "@mui/icons-material";
import React from "react";

const NavComponent1 = () => {
  return (
    <div className="primary-nav rounded-md w-full">
      <div className="mt-2 ml-1 p-6 rounded flex items-center">
        <img src="/asset/spotify-logo.png" alt="logo" height={20} width={20} />
        <h1 className="font-semibold ml-1">Spotify</h1>
      </div>
      <div className="options">
        <div className="flex ml-6 my-2 hover:underline hover:cursor-pointer">
          <Home />
          <h1 className="ml-4">Home</h1>
        </div>
        <div className="flex ml-6 my-2 pb-2 hover:underline hover:cursor-pointer">
          <Search />
          <h1 className="ml-4">Search</h1>
        </div>
      </div>
    </div>
  );
};

export default NavComponent1;
