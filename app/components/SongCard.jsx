import { PlayArrow } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Grid, IconButton } from "@mui/material";
import React from "react";

const SongCard = ({ song }) => {
  // Function to truncate the description after a certain word length
  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return `${description.slice(0, maxLength)}...`;
    }
    return description;
  };

  return (
    <Card className="mx-2 my-2 secondary-nav rounded-md relative overflow-hidden group">
      <CardMedia>
        <div className="secondary-nav object-cover p-3">
          <img
            src={song.images[0]["url"]}
            height={"100%"}
            width={"100%"}
            className="object-cover rounded-md"
            alt=""
          />
        </div>
        <div className="absolute bottom-32 right-4 opacity-0 group-hover:opacity-100">
          <IconButton className="p-2 bg-green-600 hover:bg-green-600">
            <PlayArrow sx={{ color: "black" }} />
          </IconButton>
        </div>
      </CardMedia>
      <CardContent className="secondary-nav text-white">
        <h1 className="font-semibold">{truncateDescription(song.name, 10)}</h1>
        {/* Truncate the description to 50 characters (adjust as needed) */}
        <h1 className="">{truncateDescription(song.description, 30)}</h1>
      </CardContent>
    </Card>
  );
};

export default SongCard;
