import { Add, LibraryMusic, Public } from "@mui/icons-material";
import React from "react";
import PlaylistCard from "./PlaylistCard";
import Link from "next/link";
import Box from "@mui/material/Box";

const NavComponent2 = () => {
  return (
    <div className="primary-nav rounded-md h-[96vh]">
      {/* your library */}
      <div className="p-6">
        <div className="library flex justify-between text-gray-400 hover:text-white">
          <div className="flex items-center">
            <LibraryMusic className=" " />
            <h1 className="ml-1 font-semibold">Your Library</h1>
          </div>
          <div className="">
            <Add />
          </div>
        </div>

        {/* library cards */}
        <PlaylistCard
          title={"Create your first playlist"}
          desc={"It's easy, we'll help you"}
          btn={"Create playlist"}
        />
        <PlaylistCard
          title={"Let's find some prodcasts to follow"}
          desc={"We'll keep you updated on new episodes."}
          btn={"Browse Prodcasts"}
        />

        {/* privacy center */}
        <Box sx={{ mt: 22 }}>
          <div className="flex justify-between">
            <Link className="text-sm text-gray-300" href={"/"}>
              Legal
            </Link>
            <Link className="text-sm text-gray-300" href={"/"}>
              Privacy center
            </Link>
            <Link className="text-sm text-gray-300" href={"/"}>
              Privacy policy
            </Link>
            <Link className="text-sm text-gray-300" href={"/"}>
              Cookies
            </Link>
            <Link className="text-sm text-gray-300" href={"/"}>
              About Ads
            </Link>
          </div>
          <Link className="text-sm text-gray-300" href={"/"}>
            Accessibility
          </Link>{" "}
          <br />
          <Link className="text-sm text-gray-300" href={"/"}>
            Cookies
          </Link>
          <div className="lang border border-gray-500 hover:border-white hover:cursor-pointer flex items-center w-min px-3 py-1 mt-4 rounded-2xl">
            <Public />
            <h1 className="font-semibold text-sm">English</h1>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default NavComponent2;
