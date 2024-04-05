"use client";

import React, { useEffect, useState } from "react";
import { fetchSongs } from "../service/fetchSongs";
import SongCard from "./SongCard";
import { getAccessToken } from "../service/getAccessToken";
import { Grid } from "@mui/material";
import SkeletonCard from "./Skeleton";

const Home = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getSongs() {
    try {
      // promise -> only after getting token from spotify send request to fetching playlists
      getAccessToken().then(async (respnose) => {
        const song = await fetchSongs(respnose);
        console.log(song);
        setSongs(song.playlists.items);
        setLoading(false);
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
        <h1 className="font-semibold text-gray-400 text-sm hover:cursor-pointer">Show all</h1>
      </div>
      <Grid container className="flex mt-4">
        {/* if response is loading than show skeleton */}
        {loading ? (
          <SkeletonContainer />
        ) : (
          // only fetching first 7 response from spotify api
          songs.slice(0, 7).map((song) => (
            <Grid key={song.id} item xs={6} md={2}>
              <SongCard key={song.id} song={song} />
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
};

export default Home;

const SkeletonContainer = () => {
  return (
    <Grid container>
      <Grid item xs={4} md={2}>
        <SkeletonCard />
      </Grid>
      <Grid item xs={4} md={2}>
        <SkeletonCard />
      </Grid>
      <Grid item xs={4} md={2}>
        <SkeletonCard />
      </Grid>
      <Grid item xs={4} md={2}>
        <SkeletonCard />
      </Grid>
      <Grid item xs={4} md={2}>
        <SkeletonCard />
      </Grid>
      <Grid item xs={4} md={2}>
        <SkeletonCard />
      </Grid>
      <Grid item xs={4} md={2}>
        <SkeletonCard />
      </Grid>
    </Grid>
  );
};
