"use client";
import { fetchPlayList } from "@/app/service/fetchPlayList";
import { getAccessToken } from "@/app/service/getAccessToken";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { AccessTime } from "@mui/icons-material";
import PlaylistSongCard from "@/app/components/PlaylistSongCard";
import ActionButtons from "@/app/components/ActionButtons";

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
    let hours = Math.floor(duration_ms / 3600000); // 1 hour = 3600000 ms
    let minutes = Math.floor((duration_ms % 3600000) / 60000); // 1 minute = 60000 ms
    return hours + " hours " + minutes + " minutes";
  }

  const totalDuration_ms = playlist?.tracks?.items?.reduce(
    (total, song) => total + song.track.duration_ms,
    0
  );
  const totalDuration = formatDuration(totalDuration_ms);

  return (
    <div>
      <div className="flex items-center bg-neutral-800">
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
            <li className="hover:underline hover:cursor-pointer ml-5">
              {playlist?.followers?.total} likes
            </li>
            <li className="hover:underline hover:cursor-pointer ml-5">
              {playlist?.tracks?.total} songs ,
            </li>
            <h1 className="text-gray-500 hover:underline hover:cursor-pointer ml-2">
              About {totalDuration}
            </h1>
          </div>
        </div>
      </div>

      {/* action buttons */}
      <ActionButtons />

      <div className="mt-4">
        <TableContainer className="px-4">
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
                  <AccessTime className="text-gray-500 font-bold" />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {playlist?.tracks?.items?.map((song, index) => (
                <PlaylistSongCard song={song} index={index} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default page;
