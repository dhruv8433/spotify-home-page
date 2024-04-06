import { TableCell, TableRow } from "@mui/material";
import React from "react";
import moment from "moment";

const PlaylistSongCard = ({ song, index }) => {
  function formatDuration(duration_ms) {
    let minutes = Math.floor(duration_ms / 60000);
    let seconds = ((duration_ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }
  return (
    <React.Fragment key={index}>
      <TableRow hover className="hover:cursor-pointer">
        <TableCell>
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
            <div className="ml-2">
              <h1 className="font-semibold text-white">{song.track.name}</h1>
              <p className="text-white">{song.track.artists[0]?.name}</p>
            </div>
          </div>
        </TableCell>
        <TableCell>
          <h1 className="text-gray-500">{song.track.album.name}</h1>
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
