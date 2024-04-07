"use client";

import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { IconButton } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const BottomPlayer = () => {
  const song = useSelector((state) => state.songReducer.song);

  return (
    <div className="fixed bottom-0 left-0 w-full flex flex-col justify-center items-center bg-red-500 p-1">
      <h1>{song?.track?.name}</h1>
      <div className="action-buttons">
        <IconButton>
          <SkipPreviousIcon />
        </IconButton>
        <IconButton>
          <PlayArrowIcon />
        </IconButton>
        <IconButton>
          <SkipNextIcon />
        </IconButton>
      </div>
      <audio controls>
        <source src={song.track.preview_url} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default BottomPlayer;
