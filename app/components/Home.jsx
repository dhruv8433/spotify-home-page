"use client";

import React, { useEffect, useState } from "react";
import { fetchSongs } from "../service/fetchSongs";
import SongCard from "./SongCard";
import { getAccessToken } from "../service/getAccessToken";
import { Grid } from "@mui/material";

const Home = () => {
  const [songs, setSongs] = useState([]);

  async function getSongs() {
    try {
      getAccessToken().then(async (respnose) => {
        const song = await fetchSongs(respnose);
        console.log(song);
        setSongs(song.playlists.items);
      });
    } catch (error) {
      console.log("error in getting tracks", error);
    }
  }

  useEffect(() => {
    getSongs();
  }, []);

  return (
    <div className="white-shadow">
      <div className="flex justify-between px-4 pt-4 items-center">
        <h1 className="text-2xl font-semibold">Spotify Playlist</h1>
        <h1 className="font-semibold text-gray-400 text-sm">Show all</h1>
      </div>
      <Grid container className="flex mt-4">
        {/* getting only first 7 songs using slice */}
        {songs.slice(0, 7).map((song) => (
          <Grid key={song.id} item xs={12} md={2}>
            <SongCard key={song.id} song={song} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
