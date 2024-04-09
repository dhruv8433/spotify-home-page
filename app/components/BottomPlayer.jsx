"use client";

import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { IconButton, Slider } from "@mui/material";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Pause } from "@mui/icons-material";
import VolumeDown from "@mui/icons-material/VolumeDown";
import SlideshowRoundedIcon from "@mui/icons-material/SlideshowRounded";
import MicIcon from "@mui/icons-material/Mic";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import PhonelinkIcon from "@mui/icons-material/Phonelink";
import CloseFullscreenRoundedIcon from "@mui/icons-material/CloseFullscreenRounded";

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

  const [volume, setVolume] = useState(100);
  // Add a function to handle volume change
  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue); // Update volume state
    if (audioRef.current) {
      audioRef.current.volume = newValue / 100; // Update audio volume
    }
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black text-white p-4 flex justify-between items-center">
      {song ? (
        <>
          <div className="flex items-center">
            <img
              src={song?.track?.album?.images[0]?.url}
              alt={song?.track?.album?.name}
              className="w-12 h-12 mr-3"
            />
            <div>
              <h2 className="text-md font-bold w-max">{song?.track?.name}</h2>
              <h3 className="text-xs w-max">{song?.track?.artists[0]?.name}</h3>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="">
              <IconButton>
                <SkipPreviousIcon className="text-white" />
              </IconButton>
              {!isPlaying ? (
                <IconButton onClick={handlePlayPause}>
                  <PlayArrowIcon className="text-white" />
                </IconButton>
              ) : (
                <IconButton onClick={handlePlayPause}>
                  <Pause className="text-white" />
                </IconButton>
              )}
              <IconButton>
                <SkipNextIcon className="text-white" />
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
          </div>
          <div className="flex justify-evenly">
            <IconButton>
              {isPlaying ? (
                <SlideshowRoundedIcon sx={{ color: "green" }} />
              ) : (
                <SlideshowRoundedIcon sx={{ color: "gray" }} />
              )}
            </IconButton>
            <IconButton>
              <MicIcon sx={{ color: "gray" }} />
            </IconButton>
            <IconButton>
              <QueueMusicIcon sx={{ color: "gray" }} />
            </IconButton>
            <IconButton>
              <PhonelinkIcon sx={{ color: "gray" }} />
            </IconButton>
            <IconButton>
              <VolumeDown sx={{ color: "gray" }} />
            </IconButton>
            {/* Volume slider */}
            <IconButton>
              <Slider
                value={volume}
                onChange={handleVolumeChange}
                aria-label="Volume"
                className="hover:text-green-500 items-center justify-center"
                sx={{
                  width: "150px",
                  color: "white",
                }}
              />
            </IconButton>
            <IconButton>
              <CloseFullscreenRoundedIcon sx={{ color: "gray" }} />
            </IconButton>
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
