// src/components/Login.js
import React from "react";
import { Button, Divider, IconButton, TextField } from "@mui/material";
import { CustomIconButton } from "../custom/MyButtons";
import { Apple, Close, Google } from "@mui/icons-material";

const LoginModel = ({ setLoginModelOpen }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-black shadow-lg rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-end">
          <IconButton onClick={() => setLoginModelOpen(false)}>
            <Close className="text-white"/>
          </IconButton>
        </div>
        <div className="flex flex-col items-center my-4 gap-4">
          <img
            src="/asset/spotify-logo.png"
            alt="logo"
            height={50}
            width={50}
          />
          <h1 className="text-3xl font-bold mb-6 text-center text-white">
            Log in to Spotify
          </h1>
        </div>

        <CustomIconButton
          icon={<Google />}
          text={"Continue with Google"}
          className={"mb-4"}
        />
        <CustomIconButton
          icon={<Apple />}
          text={"Continue with Apple"}
          className={"mb-4"}
        />

        <Divider className="bg-white my-4" />

        {/* Email Input */}
        <input
          type="text"
          id="email"
          placeholder="Enter your email address"
          className="w-full p-3 rounded-lg mt-4 mb-2 bg-transparent border border-white"
        />

        {/* Password Input */}
        <input
          type="text"
          id="password"
          placeholder="Enter your password"
          className="w-full p-3 rounded-lg mt-2 mb-4 bg-transparent border border-white"
        />

        {/* Login Button */}
        <button className="w-full bg-green-500 p-3 hover:bg-green-600 rounded-full mt-5">
          Login
        </button>

        {/* Forgot Password */}
        <div className="flex flex-col justify-between items-center mt-4 text-sm">
          <a href="#" className="text-white underline my-2">
            Forgot your password?
          </a>
          <a href="#" className="text-gray-400">
            Don't have Account?{" "}
            <span className="underline text-white">Sign up for Spotify</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginModel;
