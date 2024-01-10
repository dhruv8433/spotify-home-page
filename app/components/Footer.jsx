import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import { Grid } from "@mui/material";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="py-10">
      <div className="flex justify-between">
        <Grid container spacing={3} className="w-[60%] ml-4">
          <Grid item xs={12} md={4}>
            <h1 className="font-semibold">Company</h1>
            <div className="flex flex-col text-gray-400">
              <Link href={"/"} className="hover:text-white hover:underline">
                About
              </Link>
              <Link href={"/"} className="hover:text-white hover:underline">
                Jobs
              </Link>
              <Link href={"/"} className="hover:text-white hover:underline">
                For the Record{" "}
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <h1 className="font-semibold">Communities</h1>
            <div className="flex flex-col text-gray-400">
              <Link href={"/"} className="hover:text-white hover:underline">
                For Artists
              </Link>
              <Link href={"/"} className="hover:text-white hover:underline">
                Developers
              </Link>
              <Link href={"/"} className="hover:text-white hover:underline">
                Advertising
              </Link>
              <Link href={"/"} className="hover:text-white hover:underline">
                Inventers
              </Link>
              <Link href={"/"} className="hover:text-white hover:underline">
                Vendors
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <h1 className="font-semibold">Useful links</h1>
            <div className="flex flex-col text-gray-400">
              <Link href={"/"} className="hover:text-white hover:underline">
                Support
              </Link>
              <Link href={"/"} className="hover:text-white hover:underline">
                Free Mobile App
              </Link>
            </div>
          </Grid>
        </Grid>
        <div className="text-white mr-4">
          <IconButton>
            <Instagram sx={{ color: "white" }} />
          </IconButton>
          <IconButton>
            <Twitter sx={{ color: "white" }} />
          </IconButton>
          <IconButton>
            <Facebook sx={{ color: "white" }} />
          </IconButton>
        </div>
      </div>
      <div className="mt-10 p-5">
        <Divider />
        <h1 className="mt-2">&copy; 2024 Spotify AB</h1>
      </div>
    </div>
  );
};

export default Footer;
