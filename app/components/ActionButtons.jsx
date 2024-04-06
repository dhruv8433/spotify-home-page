import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { IconButton } from "@mui/material";

const ActionButtons = ({}) => {
  return (
    // play, like and options menu here --> reusable buttons
    <div className="flex items-center mt-4 ">
      <div className="bg-green-600 w-min rounded-full hover:cursor-pointer hover:bg-green-700 ml-2">
        <IconButton>
          <PlayArrowIcon />
        </IconButton>
      </div>

      <div className="">
        <IconButton>
          <FavoriteBorderIcon className="text-white" />
        </IconButton>
      </div>
      <div className="">
        <IconButton>
          <MoreHorizOutlinedIcon className="text-white" />
        </IconButton>
      </div>
    </div>
  );
};

export default ActionButtons;
