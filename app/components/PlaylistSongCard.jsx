"use client";
import React, { useRef, useState } from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { TableCell, TableRow } from "@mui/material";
import { PlaySong } from "../action/action";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

const PlaylistSongCard = ({ song, index }) => {
  const [hoveredTrack, setHoveredTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playingTrack, setPlayingTrack] = useState(null);
  const audioRef = useRef(new Audio());
  const dispatch = useDispatch();

  const handleMouseEnter = (trackId) => {
    setHoveredTrack(trackId);
  };

  const handleMouseLeave = () => {
    setHoveredTrack(null);
  };

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (playingTrack === song.track.id) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play();
        setIsPlaying(true);
      }
    } else {
      if (audio.src !== song.track.preview_url) {
        audio.src = song.track.preview_url;
      }
      audio.play();
      setIsPlaying(true);
      setPlayingTrack(song.track.id);
      dispatch(PlaySong(song));
    }
  };

  const formatDuration = (duration_ms) => {
    let minutes = Math.floor(duration_ms / 60000);
    let seconds = ((duration_ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  return (
    <React.Fragment key={index}>
      <TableRow
        onMouseEnter={() => handleMouseEnter(song.track.id)}
        onMouseLeave={handleMouseLeave}
        className="hover:cursor-pointer"
      >
        <TableCell className="">
          {hoveredTrack ? (
            <h1 key={song.track.id} className="text-white">
              {(hoveredTrack === song.track.id ||
                playingTrack === song.track.id) &&
              song.track.preview_url ? (
                playingTrack === song.track.id ? (
                  <PauseIcon onClick={handlePlayPause} fontSize="small" />
                ) : (
                  <PlayArrowIcon onClick={handlePlayPause} fontSize="small" />
                )
              ) : (
                <PlayArrowIcon onClick={handlePlayPause} fontSize="small" />
              )}
            </h1>
          ) : (
            <h1 className="text-white">{index + 1}</h1>
          )}
        </TableCell>
        <TableCell>
          <div className="flex items-center">
            <img
              src={song.track.album.images[0]?.url}
              alt={song.track.name}
              height={50}
              width={50}
            />
            <div className="ml-2">
              <h1 className="font-semibold text-white hover:underline">
                {song.track.name}
              </h1>
              <p className="text-white hover:underline">
                {song.track.artists[0]?.name}
              </p>
            </div>
          </div>
        </TableCell>
        <TableCell>
          <h1 className="text-gray-500 hover:underline">
            {song.track.album.name}
          </h1>
        </TableCell>
        <TableCell>
          <h1 className="text-gray-500">{moment(song.added_at).fromNow()}</h1>
        </TableCell>
        <TableCell>
          <h1 className="text-gray-500">
            {formatDuration(song.track.duration_ms)}
          </h1>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default PlaylistSongCard;
