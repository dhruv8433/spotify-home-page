"use client";
import { fetchPlayList } from "@/app/service/fetchPlayList";
import { getAccessToken } from "@/app/service/getAccessToken";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import moment from "moment";

const page = () => {
  const { id } = useParams();
  const accessToken = localStorage.getItem("access_token");

  const [playlist, setPlaylist] = useState([]);

  async function fetchingPlayListDetails() {
    const response = await fetchPlayList(accessToken, id);
    console.log(response);
    setPlaylist(response);
  }

  useEffect(() => {
    if (accessToken !== undefined) {
      fetchingPlayListDetails();
    }
    getAccessToken().then(() => fetchingPlayListDetails());
  }, []);

  function formatDuration(duration_ms) {
    let minutes = Math.floor(duration_ms / 60000);
    let seconds = ((duration_ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }
  return (
    <div>
      <div className="flex items-center rounded-md bg-neutral-800">
        <div className="playlist-img px-3 py-4">
          {/*  API call to fetch the playlist details is asynchronous, and the component renders before the data is fetched. */}
          <img
            src={playlist?.images?.[0]?.url || ""}
            className="rounded-xl object-cover"
            alt=""
            height={250}
            width={250}
          />
        </div>
        <div className="playlist-info mt-10">
          <h1>{playlist.type}</h1>
          <h1 className="text-8xl font-sans font-bold">{playlist.name}</h1>
          <h1 className="mt-4 text-gray-400">{playlist.description}</h1>
          <div className="flex items-center mt-2">
            <img
              src="/asset/spotify-primary-logo.jpg"
              alt="logo"
              height={50}
              width={50}
            />
            <h1 className="font-bold hover:underline hover:cursor-pointer">
              {playlist?.owner?.display_name}
            </h1>
          </div>
        </div>
      </div>

      {/* action buttons */}
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

      <div className="mt-4 p-1">
        <TableContainer>
          <Table className="w-full">
            <TableHead>
              <TableRow>
                <TableCell>
                  <h1 className="text-gray-500 font-bold">#</h1>
                </TableCell>
                <TableCell>
                  <h1 className="text-gray-500 font-bold">Title</h1>
                </TableCell>
                <TableCell>
                  <h1 className="text-gray-500 font-bold">Album</h1>
                </TableCell>
                <TableCell>
                  <h1 className="text-gray-500 font-bold">Date Added</h1>
                </TableCell>
                <TableCell>
                  <h1 className="text-gray-500 font-bold">Play Time</h1>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {playlist?.tracks?.items?.map((song, index) => (
                <React.Fragment key={index}>
                  <TableRow
                    hover
                    className="hover:bg-gray-500 hover:cursor-pointer"
                    sx={{ borderBottom: "0px none" }}
                  >
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
                          <h1 className="font-semibold text-white">
                            {song.track.name}
                          </h1>
                          <p className="text-white">
                            {song.track.artists[0]?.name}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <h1 className="text-gray-500">{song.track.album.name}</h1>
                    </TableCell>
                    <TableCell>
                      <h1 className="text-gray-500">
                        {moment(song.added_at).fromNow()}
                      </h1>
                    </TableCell>
                    <TableCell>
                      <h1 className="text-gray-500">
                        {formatDuration(song.track.duration_ms)}
                      </h1>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default page;
