import { PlayArrow } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Skeleton,
} from "@mui/material";
import React from "react";

const SkeletonCard = () => {
  return (
    <div>
      <Card className="mx-2 secondary-nav rounded-md relative overflow-hidden group">
        <CardMedia>
          <div className="secondary-nav h-[222px] object-cover p-3">
            <Skeleton
              variant="rectangular"
              height={"100%"}
              width={"100%"}
              className="object-cover rounded-md"
            />
          </div>
          <div className="absolute bottom-32 right-4 opacity-0 group-hover:opacity-100">
            <IconButton className="p-2 bg-green-600 hover:bg-green-600">
              <PlayArrow sx={{ color: "black" }} />
            </IconButton>
          </div>
        </CardMedia>
        <CardContent className="secondary-nav text-white">
          <Skeleton
            className="h-2.5 bg-gray-200 rounded-md dark:bg-gray-700 mb-2"
            animation="wave"
            height={30}
            width="60%"
          />
          <Skeleton
            className="h-2 bg-gray-200 dark:bg-gray-700 mb-2.5"
            animation="wave"
            height={20}
            width="100%"
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default SkeletonCard;
