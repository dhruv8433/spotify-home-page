"use client";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { IconButton } from "@mui/material";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Pause } from "@mui/icons-material";

const BottomPlayer = () => {
  const song = useSelector((state) => state.songReducer.song);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const calculateProgress = () => {
    if (audioRef.current) {
      const { currentTime, duration } = audioRef.current;
      return (currentTime / duration) * 100;
    }
    return 0;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handlePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-red-500 text-white p-4 flex items-center">
      {song ? (
        <>
          <div className="flex items-center flex-grow">
            <img
              src={song?.track?.album?.images[0]?.url}
              alt={song?.track?.album?.name}
              className="w-12 h-12 mr-3"
            />
            <div>
              <h2 className="text-md font-bold">{song?.track?.name}</h2>
              <h3 className="text-xs">{song?.track?.artists[0]?.name}</h3>
            </div>
          </div>
          <div className="flex items-center flex-grow">
            <IconButton>
              <SkipPreviousIcon />
            </IconButton>
            {!isPlaying ? (
              <IconButton onClick={handlePlayPause}>
                <PlayArrowIcon />
              </IconButton>
            ) : (
              <IconButton onClick={handlePlayPause}>
                <Pause />
              </IconButton>
            )}
            <IconButton>
              <SkipNextIcon />
            </IconButton>
          </div>
          <div className="flex items-center">
            <span className="mr-2">
              {formatTime(audioRef.current?.currentTime)}
            </span>
            <div className="h-1 bg-white w-64 relative">
              <div
                className="h-full bg-green-500 absolute"
                style={{ width: `${calculateProgress()}%` }}
              ></div>
            </div>
            <span className="ml-2">
              {formatTime(audioRef.current?.duration)}
            </span>
          </div>
          <audio ref={audioRef} className="hidden" controls>
            <source src={song?.track?.preview_url} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default BottomPlayer;
