import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { TableCell, TableRow } from "@mui/material";
import { PlaySong } from "../action/action";

const PlaylistSongCard = ({ song, index }) => {
  function formatDuration(duration_ms) {
    let minutes = Math.floor(duration_ms / 60000);
    let seconds = ((duration_ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  const dispatch = useDispatch();
  function setAlbumSong(song) {
    dispatch(PlaySong(song));
  }
  return (
    <React.Fragment key={index}>
      <TableRow
        onClick={() => setAlbumSong(song)}
        className="hover:cursor-pointer"
      >
        <TableCell className="">
          <h1 className="text-white">{index + 1}</h1>
        </TableCell>
        <TableCell>
          <div className="flex items-center">
            <img
              src={song.track.album.images[0]?.url}
              alt={song.track.name}
              height={50}
              width={50}
            />
            {song.track.preview_url && (
              <audio controls>
                <source src={song.track.preview_url} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            )}
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
